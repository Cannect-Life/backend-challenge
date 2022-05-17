import { Prisma } from '@prisma/client';

export class Trasacao implements Prisma.TransacaoUncheckedCreateInput {
  id?: number;
  valor: number;
  cpf: string;
  cartaoId: number;
}
