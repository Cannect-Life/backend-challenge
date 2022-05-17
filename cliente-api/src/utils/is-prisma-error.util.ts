import { PrismaClientError } from '../errors/PrismaClientError';

export const isPrismaErrorUtil = (e: PrismaClientError): boolean => {
  return (
    typeof e.code === 'string' &&
    typeof e.clientVersion === 'string' &&
    (typeof e.meta === 'undefined' ||
      (typeof e.meta === 'object' &&
        (typeof e.meta.target === 'string' ||
          typeof e.meta.target === 'object')))
  );
};
