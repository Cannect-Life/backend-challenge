import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCartaoDto: CreateCartaoDto) {
    const data: Prisma.CartaoCreateInput = {
      ...createCartaoDto,
    };

    return await this.prisma.cartao.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.cartao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.cartao.findUnique({ where: { id } });
  }

  async findByNumero(numero: string) {
    return await this.prisma.cartao.findFirst({ where: { numero } });
  }

  async update(id: number, updateCartaoDto: UpdateCartaoDto) {
    const data: Prisma.CartaoUpdateInput = {
      ...updateCartaoDto,
    };

    return await this.prisma.cartao.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.cartao.delete({ where: { id } });
  }
}
