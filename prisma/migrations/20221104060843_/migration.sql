/*
  Warnings:

  - You are about to drop the column `salario` on the `productos` table. All the data in the column will be lost.
  - Added the required column `descri` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productos" DROP COLUMN "salario",
ADD COLUMN     "descri" TEXT NOT NULL;
