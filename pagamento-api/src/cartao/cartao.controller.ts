import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Controller('cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Post()
  create(@Body() createCartaoDto: CreateCartaoDto) {
    return this.cartaoService.create(createCartaoDto);
  }

  @Get()
  findAll() {
    return this.cartaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartaoDto: UpdateCartaoDto) {
    return this.cartaoService.update(+id, updateCartaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartaoService.remove(+id);
  }
}
