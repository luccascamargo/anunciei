import { NextRequest, NextResponse } from "next/server";
import { UploadFile } from "@/lib/upload-s3";
import { normalizeText } from "@/lib/utils";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { verifyJwt } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
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
    const createAdvertDto = {
      marca: formData.get("marca") as string,
      modelo: formData.get("modelo") as string,
      ano_modelo: formData.get("ano_modelo") as string,
      cambio: formData.get("cambio") as string,
      cidade: formData.get("cidade") as string,
      estado: formData.get("estado") as string,
      placa: formData.get("placa") as string,
      portas: formData.get("portas") as string,
      preco: formData.get("preco") as string,
      quilometragem: formData.get("quilometragem") as string,
      tipo: formData.get("tipo") as string,
      cor: formData.get("cor") as string,
      descricao: formData.get("descricao") as string,
      opcionais: formData.get("opcionais") as string,
    };

    if (!files || files.length <= 0) {
      return NextResponse.json(
        {
          message: "Não é possível cadastrar um anúncio sem imagem.",
        },
        { status: 400 }
      );
    }

    const userAlreadyHasAdvert = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        adverts: true,
      },
    });

    if (!userAlreadyHasAdvert) {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 400 }
      );
    }

    if (
      userAlreadyHasAdvert.plan === "FREE" &&
      userAlreadyHasAdvert.adverts.length >= 3
    ) {
      if (files.length > 6) {
        return NextResponse.json(
          {
            message: "Limite de imagens atingido. faça um upgrade no seu plano",
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        {
          message: "Limite de anuncios atingido. faça um upgrade no seu plano",
        },
        { status: 400 }
      );
    }

    if (
      userAlreadyHasAdvert.plan === "BASIC" &&
      userAlreadyHasAdvert.adverts.length >= 5
    ) {
      if (files.length > 12) {
        return NextResponse.json(
          {
            message: "Limite de imagens atingido. faça um upgrade no seu plano",
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        {
          message: "Limite de anuncios atingido. faça um upgrade no seu plano",
        },
        { status: 400 }
      );
    }

    const imagens = await Promise.all(
      files.map(async (file) => {
        const image = await UploadFile(file);
        return image;
      })
    );

    let optionals: Array<{ id: string }> = [];

    if (createAdvertDto.opcionais) {
      optionals = createAdvertDto.opcionais
        .split(",")
        .map((opt) => ({ id: opt }));
    }

    const formatedDescription = normalizeText(createAdvertDto.descricao);
    const formatedCity = normalizeText(createAdvertDto.cidade);
    const formatedState = normalizeText(createAdvertDto.estado);

    const uniqueId = uuidv4();
    const slug = slugify(
      `${createAdvertDto.marca}-${createAdvertDto.modelo}-${createAdvertDto.ano_modelo}-${createAdvertDto.cidade}-${createAdvertDto.estado}-${createAdvertDto.cor}-${uniqueId}`,
      { lower: true, strict: true }
    );

    const advert = await prisma.adverts.create({
      data: {
        year_model: Number(createAdvertDto.ano_modelo.split("-")[0]),
        transmission: createAdvertDto.cambio,
        city: createAdvertDto.cidade,
        formatted_city: formatedCity,
        color: createAdvertDto.cor,
        formatted_state: formatedState,
        state: createAdvertDto.estado,
        plate: createAdvertDto.placa,
        doors: createAdvertDto.portas,
        price: parseInt(createAdvertDto.preco, 10),
        mileage: parseInt(createAdvertDto.quilometragem, 10),
        slug,
        type: createAdvertDto.tipo,
        updated_at: new Date(),
        created_at: new Date(),
        description: createAdvertDto.descricao,
        formatted_description: formatedDescription,
        emphasis: false,
        status: "REQUESTED",
        brand: {
          connect: { slug: createAdvertDto.marca },
        },
        model: {
          connect: { slug: createAdvertDto.modelo },
        },
        images: {
          createMany: {
            data: imagens,
          },
        },
        optionals: {
          connect: optionals,
        },
        user: {
          connect: {
            id: user_id,
          },
        },
      },
      include: {
        images: true,
        optionals: true,
      },
    });

    return NextResponse.json(advert);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
