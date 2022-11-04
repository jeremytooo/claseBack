/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ventas` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ventas` table. All the data in the column will be lost.
  - Added the required column `cantidadvendida` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descri` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ventas" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "cantidadvendida" TEXT NOT NULL,
ADD COLUMN     "descri" TEXT NOT NULL,
ADD COLUMN     "fecha" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "marca" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;
