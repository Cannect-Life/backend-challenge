import { Injectable } from '@nestjs/common';
import { CreateTrasacaoDto } from './dto/create-trasacao.dto';
import { UpdateTrasacaoDto } from './dto/update-trasacao.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Cartao } from '../cartao/entities/cartao.entity';
import { CartaoService } from '../cartao/cartao.service';

@Injectable()
export class TrasacaoService {
  constructor(
    private prisma: PrismaService,
    private readonly cartaoService: CartaoService,
  ) {}

  async create(createTrasacaoDto: CreateTrasacaoDto) {
    const cartaoFinded: Cartao = await this.cartaoService.findByNumero(
      createTrasacaoDto.cartao.numero,
    );

    let data: Prisma.TransacaoCreateInput;
    if (cartaoFinded !== null) {
      data = {
        ...createTrasacaoDto,
        cartao: {
          connect: {
            id: cartaoFinded.id,
          },
        },
      };
    } else {
      data = {
        ...createTrasacaoDto,
        cartao: {
          create: createTrasacaoDto.cartao,
        },
      };
    }

    return await this.prisma.transacao.create({
      data,
      include: {
        cartao: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.transacao.findMany({
      include: {
        cartao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.transacao.findUnique({
      where: { id },
      include: { cartao: true },
    });
  }

  async update(id: number, updateTrasacaoDto: UpdateTrasacaoDto) {
    const data: Prisma.TransacaoUpdateInput = {
      ...updateTrasacaoDto,
      cartao: {
        update: updateTrasacaoDto.cartao,
      },
    };

    return await this.prisma.transacao.update({
      data,
      where: { id },
      include: {
        cartao: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.transacao.delete({ where: { id } });
  }
}
