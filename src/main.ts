import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('energy');
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  });

  const config = new DocumentBuilder()
    .setTitle('More Energy')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Бутенко Максим (демонстрационный проект)')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('energy/REST-API/documentation', app, document);
  await app.listen(3000);
}

bootstrap();
