import { Prisma } from '@prisma/client';

export class Cartao implements Prisma.CartaoUncheckedCreateInput {
  id?: number;
  titular: string;
  numero: string;
  data_expiracao: string;
  bandeira: string;
  cvv: string;
  transacoes?: Prisma.TransacaoUncheckedCreateNestedManyWithoutCartaoInput;
}
