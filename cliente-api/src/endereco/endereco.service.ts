import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    const data: Prisma.EnderecoCreateInput = {
      ...createEnderecoDto,
    };

    return await this.prisma.endereco.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.endereco.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.endereco.findUnique({ where: { id } });
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const data: Prisma.EnderecoUpdateInput = {
      ...updateEnderecoDto,
    };

    return await this.prisma.endereco.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.endereco.delete({ where: { id } });
  }
}
