import { Cartao } from '../entities/cartao.entity';

export class CreateCartaoDto extends Cartao {
  titular: string;
  numero: string;
  data_expiracao: string;
  bandeira: string;
  cvv: string;
}
