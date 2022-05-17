import { Cliente } from '../entities/cliente.entity';
import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClienteDto extends Cliente {
  @IsString()
  nome: string;

  @IsDateString()
  dataNascimento: string | Date;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsDefined()
  endereco?: CreateEnderecoDto;
}
