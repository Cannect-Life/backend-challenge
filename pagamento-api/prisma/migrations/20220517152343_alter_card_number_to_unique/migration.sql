/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Cartao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cartao_numero_key" ON "Cartao"("numero");
