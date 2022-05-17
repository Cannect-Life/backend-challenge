import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Cliente } from './entities/cliente.entity';

import * as bcrypt from 'bcrypt';
import { CreateTransacaoDto } from './integracao/pagamento-integracao/dto/create-transacao.dto';
import { PagamentoIntegracaoService } from './integracao/pagamento-integracao/pagamento-integracao.service';

@Injectable()
export class ClienteService {
  constructor(
    private prisma: PrismaService,
    private readonly pagamentoService: PagamentoIntegracaoService,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const data: Prisma.ClienteCreateInput = {
      ...createClienteDto,
      dataNascimento: new Date(createClienteDto.dataNascimento),
      password: await bcrypt.hash(createClienteDto.password, 10),
      endereco: {
        create: createClienteDto.endereco,
      },
    };

    const cliente = await this.prisma.cliente.create({
      data,
      include: {
        endereco: true,
      },
    });

    return this.formatClienteResponse(cliente);
  }

  async findAll() {
    const clientes = await this.prisma.cliente.findMany({
      include: { endereco: true },
    });

    return clientes.map((cliente) => {
      return this.formatClienteResponse(cliente);
    });
  }

  async findById(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
      include: {
        endereco: true,
      },
    });

    return this.formatClienteResponse(cliente);
  }

  async findByEmail(email: string) {
    return await this.prisma.cliente.findUnique({
      where: { email },
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const data: Prisma.ClienteUpdateInput = {
      ...updateClienteDto,
      endereco: {
        update: updateClienteDto.endereco,
      },
    };

    const cliente = await this.prisma.cliente.update({
      data,
      where: { id },
      include: {
        endereco: true,
      },
    });

    return this.formatClienteResponse(cliente);
  }

  async remove(id: number) {
    return await this.prisma.cliente.delete({
      where: { id },
    });
  }

  formatClienteResponse(cliente: Cliente) {
    return {
      ...cliente,
      enderecoId: undefined,
      password: undefined,
    };
  }

  async createTransacao(createTransactionDto: CreateTransacaoDto) {
    return await this.pagamentoService.createTransacao(createTransactionDto);
  }
}
