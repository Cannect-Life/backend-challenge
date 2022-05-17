import { Prisma } from '@prisma/client';

export class Endereco implements Prisma.EnderecoUncheckedCreateInput {
  id?: number;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}
