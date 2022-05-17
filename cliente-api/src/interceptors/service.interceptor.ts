import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { ServiceError } from '../errors/ServiceError';

@Injectable()
export class ServiceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ServiceError) {
          throw new ServiceUnavailableException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
