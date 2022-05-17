import { IsDefined, IsNumber, IsString } from 'class-validator';
import { CartaoDto } from './cartao.dto';

export class CreateTransacaoDto {
  @IsNumber()
  valor: number;

  @IsString()
  cpf: string;

  @IsDefined()
  cartao: CartaoDto;
}
