import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CartaoController],
  providers: [CartaoService, PrismaService],
  exports: [CartaoService],
})
export class CartaoModule {}
