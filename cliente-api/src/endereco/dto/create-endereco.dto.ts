import { Endereco } from '../entities/endereco.entity';
import { IsString } from 'class-validator';

export class CreateEnderecoDto extends Endereco {
  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  cep: string;
}
