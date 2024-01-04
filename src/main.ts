import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Ads Management')
    .setDescription('The Ads Management API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}
bootstrap();
