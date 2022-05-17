import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { DatabaseInterceptor } from './interceptors/database.interceptor';
import { ConflictInterceptor } from './interceptors/conflict.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ServiceInterceptor } from './interceptors/service.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());
  app.useGlobalInterceptors(new ServiceInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Cliente API')
    .setDescription('The Cliente API description')
    .setVersion('1.0')
    .addTag('login')
    .addTag('cliente')
    .addTag('endereco')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
