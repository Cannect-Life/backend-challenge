import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/entities/cliente.entity';

import * as bcrypt from 'bcrypt';

import { UnauthorizedError } from '../errors/UnauthorizedError';
import { ClientePayload } from './model/ClientePayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly clienteService: ClienteService,
  ) {}

  async login(email: string, password: string) {
    const cliente: Cliente = await this.validadeCliente(email, password);

    const payload: ClientePayload = {
      username: cliente.email,
      sub: cliente.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validadeCliente(email: string, password: string) {
    const cliente = await this.clienteService.findByEmail(email);

    if (cliente) {
      const isPasswordValid = await bcrypt.compare(password, cliente.password);

      if (isPasswordValid) {
        return { ...cliente, password: undefined };
      }
    }

    throw new UnauthorizedError('Email or password is incorrect.');
  }
}
