import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TrasacaoModule } from './trasacao/trasacao.module';
import { CartaoModule } from './cartao/cartao.module';

@Module({
  imports: [PrismaModule, TrasacaoModule, CartaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
