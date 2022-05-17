import { Injectable } from '@nestjs/common';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { HttpService } from '@nestjs/axios';
import { ServiceError } from '../../../errors/ServiceError';

@Injectable()
export class PagamentoIntegracaoService {
  constructor(private httpService: HttpService) {}

  async createTransacao(createTransactionDto: CreateTransacaoDto) {
    return await this.httpService
      .post(process.env.PAGAMENTO_API_URL + '/trasacao', createTransactionDto)
      .toPromise()
      .then((response) => response.data)
      .catch((err) => {
        console.error(`Erro ao realizar pagamento: ${err}`);
        throw new ServiceError(`Erro ao realizar pagamento: ${err}`);
      });
  }
}
