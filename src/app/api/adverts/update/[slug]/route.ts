import { NextRequest, NextResponse } from "next/server";
import { DeleteFiles, UploadFile } from "@/lib/upload-s3";
import { normalizeText } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import { verifyJwt } from "@/lib/auth";
import { AsyncParams } from "@/@types/FilterAdverts";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(
  request: NextRequest,
  { params }: { params: AsyncParams }
) {
  try {
    const { slug: id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "ID do anúncio não encontrado" },
        { status: 400 }
      );
    }

    const token = request.cookies.get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Token de autenticação não encontrado" },
        { status: 401 }
      );
    }
    const user_id = await verifyJwt(token);
    if (!user_id) {
      return NextResponse.json(
        { message: "Token de autenticação inválido" },
        { status: 401 }
      );
    }
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];
    const updateAdvertDto = {
      ano_modelo: formData.get("ano_modelo") as string,
      cambio: formData.get("cambio") as string,
      cidade: formData.get("cidade") as string,
      estado: formData.get("estado") as string,
      portas: formData.get("portas") as string,
      preco: formData.get("preco") as string,
      quilometragem: formData.get("quilometragem") as string,
      cor: formData.get("cor") as string,
      descricao: formData.get("descricao") as string,
      opcionais: formData.get("opcionais") as string,
      imagens_remover: formData.get("imagens_remover") as string,
    };

    let imagesToRemove: Array<{ id: string }> = [];

    if (updateAdvertDto.imagens_remover) {
      imagesToRemove = updateAdvertDto.imagens_remover
        .split(",")
        .map((opt) => ({ id: opt }));
    }

    const advert = await prisma.adverts.findUnique({
      where: {
        user_id,
        id,
      },
      include: {
        images: true,
        optionals: true,
        user: true,
        brand: true,
        model: true,
      },
    });

    if (!advert) {
      return NextResponse.json(
        { message: "Anúncio não encontrado" },
        { status: 400 }
      );
    }

    if (
      !files &&
      updateAdvertDto.imagens_remover &&
      updateAdvertDto.imagens_remover.length === advert.images.length
    ) {
      return NextResponse.json(
        { message: "Você não pode remover todas as imagens do anúncio" },
        { status: 400 }
      );
    }

    if (
      files &&
      advert.user.plan === "FREE" &&
      advert.images.length + files.length > 6
    ) {
      return NextResponse.json(
        { message: "Limite de imagens atingido. Faça um upgrade no seu plano" },
        { status: 400 }
      );
    }

    if (
      files &&
      advert.user.plan === "BASIC" &&
      advert.images.length + files.length > 12
    ) {
      return NextResponse.json(
        { message: "Limite de imagens atingido. Faça um upgrade no seu plano" },
        { status: 400 }
      );
    }

    let newImages: Array<{ url: string; key: string }> = [];

    if (files && files.length > 0) {
      newImages = await Promise.all(
        files.map(async (file) => {
          const image = await UploadFile(file);
          return image;
        })
      );
    }

    if (imagesToRemove) {
      if (imagesToRemove.length > 0) {
        const imagesDeleted = await prisma.photos.findMany({
          where: {
            id: {
              in: imagesToRemove.map((image: { id: string }) => image.id),
            },
          },
          select: {
            key: true,
          },
        });

        await prisma.photos.deleteMany({
          where: {
            advert_id: advert.id,
            id: {
              in: imagesToRemove.map((image: { id: string }) => image.id),
            },
          },
        });

        await DeleteFiles(imagesDeleted);
      }
    }

    let optionals: Array<{ id: string }> = [];

    if (updateAdvertDto.opcionais) {
      optionals = updateAdvertDto.opcionais
        .split(",")
        .map((opt) => ({ id: opt }));
    }

    const formatedDescription = normalizeText(updateAdvertDto.descricao);
    const formatedCity = normalizeText(updateAdvertDto.cidade);

    const uniqueId = uuidv4();
    const slug = slugify(
      `${advert.brand.name}-${advert.model.name}-${advert.year_model}-${advert.city}-${advert.state}-${advert.color}-${uniqueId}`,
      { lower: true, strict: true }
    );

    const advertUpdate = await prisma.adverts.update({
      where: {
        id: advert.id,
      },
      data: {
        status: "REQUESTED",
        slug,
        year_model: parseInt(updateAdvertDto.ano_modelo) || advert.year_model,
        transmission: updateAdvertDto.cambio || advert.transmission,
        city: updateAdvertDto.cidade || advert.city,
        formatted_city: formatedCity || advert.formatted_city,
        color: updateAdvertDto.cor || advert.color,
        description: updateAdvertDto.descricao || advert.description,
        formatted_description:
          formatedDescription || advert.formatted_description,
        state: updateAdvertDto.estado || advert.state,
        images: {
          createMany: {
            data: newImages.length > 0 ? newImages : [],
          },
        },
        optionals:
          optionals.length > 0
            ? {
                set: optionals,
              }
            : undefined,
        doors: updateAdvertDto.portas || advert.doors,
        price: Number(updateAdvertDto.preco) || advert.price,
        mileage: Number(updateAdvertDto.quilometragem) || advert.mileage,
        updated_at: new Date(),
      },
      include: {
        images: true,
        optionals: true,
      },
    });

    return NextResponse.json(advertUpdate);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
