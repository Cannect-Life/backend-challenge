import { Request } from 'express';
import { Cliente } from '../../cliente/entities/cliente.entity';

export interface AuthRequest extends Request {
  principal: Cliente;
}
