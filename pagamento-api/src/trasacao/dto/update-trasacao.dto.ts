import { PartialType } from '@nestjs/mapped-types';
import { CreateTrasacaoDto } from './create-trasacao.dto';

export class UpdateTrasacaoDto extends PartialType(CreateTrasacaoDto) {}
