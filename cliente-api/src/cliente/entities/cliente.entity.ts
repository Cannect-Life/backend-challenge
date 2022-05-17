import { Prisma } from '@prisma/client';

export class Cliente implements Prisma.ClienteUncheckedCreateInput {
  id?: number;
  nome: string;
  dataNascimento: string | Date;
  email: string;
  password: string;
  enderecoId?: number;
}
