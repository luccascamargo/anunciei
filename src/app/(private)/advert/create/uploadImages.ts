"use server";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

interface UploadResult {
  url: string;
  fields: Record<string, string>;
  key: string;
}

export async function UploadImagesToS3(
  files: File[]
): Promise<{ uploads?: UploadResult[]; error?: string }> {
  // Validação de entrada
  if (!Array.isArray(files)) {
    return { error: "Invalid input: files must be an array." };
  }

  if (files.length === 0) {
    return { error: "No files provided." };
  }

  try {
    const client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      },
    });

    const uploads: UploadResult[] = [];

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        console.warn(`File ${file.name} is not an image and will be skipped.`);
        continue;
      }

      const key = uuidv4(); // Gera uma chave única para o arquivo
      const { url, fields } = await createPresignedPost(client, {
        Bucket: process.env.AWS_BUCKET_NAME || "",
        Key: key,
        Conditions: [
          ["content-length-range", 0, 10485760], // up to 10 MB
          ["starts-with", "$Content-Type", file.type],
        ],
        Fields: {
          "Content-Type": file.type,
        },
        Expires: 600, // 10 minutos
      });

      uploads.push({ url, fields, key });
    }

    return { uploads };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error uploading images to S3:", error);
    return { error: error.message || "Failed to upload images to S3." };
  }
}
