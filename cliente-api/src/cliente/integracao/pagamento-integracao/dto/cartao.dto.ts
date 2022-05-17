import { IsString } from 'class-validator';

export class CartaoDto {
  @IsString()
  titular: string;

  @IsString()
  numero: string;

  @IsString()
  data_expiracao: string;

  @IsString()
  bandeira: string;

  @IsString()
  cvv: string;
}
