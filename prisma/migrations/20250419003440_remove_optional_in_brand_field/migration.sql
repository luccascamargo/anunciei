/*
  Warnings:

  - Made the column `updated_at` on table `adverts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand_id` on table `adverts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "adverts" ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "brand_id" SET NOT NULL;
