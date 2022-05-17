import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrasacaoService } from './trasacao.service';
import { CreateTrasacaoDto } from './dto/create-trasacao.dto';
import { UpdateTrasacaoDto } from './dto/update-trasacao.dto';

@Controller('trasacao')
export class TrasacaoController {
  constructor(private readonly trasacaoService: TrasacaoService) {}

  @Post()
  create(@Body() createTrasacaoDto: CreateTrasacaoDto) {
    return this.trasacaoService.create(createTrasacaoDto);
  }

  @Get()
  findAll() {
    return this.trasacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trasacaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrasacaoDto: UpdateTrasacaoDto,
  ) {
    return this.trasacaoService.update(+id, updateTrasacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trasacaoService.remove(+id);
  }
}
