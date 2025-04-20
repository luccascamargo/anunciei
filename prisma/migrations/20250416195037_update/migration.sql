/*
  Warnings:

  - You are about to drop the column `board_id` on the `adverts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "adverts" DROP CONSTRAINT "adverts_board_id_fkey";

-- AlterTable
ALTER TABLE "adverts" DROP COLUMN "board_id",
ADD COLUMN     "brand_id" TEXT;

-- AddForeignKey
ALTER TABLE "adverts" ADD CONSTRAINT "adverts_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
