import { PrismaClientError } from '../errors/PrismaClientError';
import { PrismaErrors } from '../prisma/prisma.errors';
import { UniqueConstraintError } from '../errors/UniqueConstraintError';
import { DatabaseError } from '../errors/DatabaseError';

export const handleDatebaseErrorsUtil = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
