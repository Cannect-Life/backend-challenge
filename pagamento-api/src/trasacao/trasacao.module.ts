import { Module } from '@nestjs/common';
import { TrasacaoService } from './trasacao.service';
import { TrasacaoController } from './trasacao.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CartaoModule } from '../cartao/cartao.module';

@Module({
  imports: [CartaoModule],
  controllers: [TrasacaoController],
  providers: [TrasacaoService, PrismaService],
})
export class TrasacaoModule {}
