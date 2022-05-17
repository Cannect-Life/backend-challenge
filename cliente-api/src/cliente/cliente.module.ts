import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PagamentoIntegracaoService } from './integracao/pagamento-integracao/pagamento-integracao.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService, PagamentoIntegracaoService],
  exports: [ClienteService],
})
export class ClienteModule {}
