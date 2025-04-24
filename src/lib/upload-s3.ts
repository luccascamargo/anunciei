import {
  S3Client,
  PutObjectCommand,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp"; // Importa a biblioteca sharp

if (
  !process.env.AWS_REGION ||
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.AWS_S3_BUCKET_NAME
) {
  throw new Error("Variáveis de ambiente AWS não configuradas corretamente.");
}

const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function UploadFile(
  file: File
): Promise<{ url: string; key: string }> {
  if (!file) {
    throw new Error("Arquivo não encontrado.");
  }

  const fileKey = `${uuidv4()}-${file.name.split(".")[0]}.webp`; // Define o nome do arquivo com extensão .webp

  try {
    // Converte a imagem para WebP usando sharp
    const webpBuffer = await sharp(await file.arrayBuffer())
      .webp({ quality: 80 }) // Define a qualidade da conversão (80 é um bom valor padrão)
      .toBuffer();

    // Cria o comando para upload no S3
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileKey,
      Body: webpBuffer, // Usa o buffer da imagem convertida
      ContentType: "image/webp", // Define o tipo de conteúdo como WebP
    });

    // Envia o arquivo para o S3
    await client.send(command);

    return {
      url: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
      key: fileKey,
    };
  } catch (error) {
    console.error("Erro ao fazer upload do arquivo para o S3:", error);
    throw new Error("Erro ao fazer upload do arquivo.");
  }
}

export async function DeleteFiles(files: { key: string }[]): Promise<string> {
  if (!files || files.length === 0) {
    throw new Error("Nenhum arquivo encontrado para deletar.");
  }

  const deleteObjects = files.map((file) => ({
    Key: file.key,
  }));

  const command = new DeleteObjectsCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Delete: {
      Objects: deleteObjects,
      Quiet: true,
    },
  });

  try {
    await client.send(command);
    return "Arquivos deletados com sucesso.";
  } catch (error) {
    console.error("Erro ao deletar arquivos do S3:", error);
    throw new Error("Erro ao deletar arquivos.");
  }
}
