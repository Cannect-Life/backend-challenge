import { Trasacao } from '../entities/trasacao.entity';
import { CreateCartaoDto } from '../../cartao/dto/create-cartao.dto';

export class CreateTrasacaoDto extends Trasacao {
  valor: number;
  cpf: string;
  cartao: CreateCartaoDto;
}
