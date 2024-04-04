import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Online Education')
    .setDescription('api endpoints of Online Education system')
    .setVersion('1.0')
    .addTag('TEST')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(process.env.SERVER_PORT, () => {
    console.log(
      `Backend started successfuly on PORT: ${process.env.SERVER_PORT}`,
    );
    console.log(
      `Watch API doc at http://localhost:${process.env.SERVER_PORT}/api-doc`,
    );
  });
}
bootstrap();
