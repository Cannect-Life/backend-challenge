import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { isPrismaErrorUtil } from '../utils/is-prisma-error.util';
import { handleDatebaseErrorsUtil } from '../utils/handle-database-errors.util';
import { ConflictError } from '../errors/ConflictError';

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (isPrismaErrorUtil(error)) {
          error = handleDatebaseErrorsUtil(error);
        }
        if (error instanceof ConflictError) {
          throw new ConflictException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
