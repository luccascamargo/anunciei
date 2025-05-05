/*
  Warnings:

  - You are about to drop the column `contacts` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `visits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "contacts";

-- AlterTable
ALTER TABLE "visits" DROP COLUMN "views";
