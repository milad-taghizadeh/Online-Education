import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfigInit } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfigInit(app);
  await app.listen(process.env.SERVER_PORT, () => {
    console.log(
      `Application successfuly started on PORT: ${process.env.SERVER_PORT}`,
    );
    console.log(
      `Watch API doc at http://localhost:${process.env.SERVER_PORT}/${process.env.SWAGGER_ENDPOINT}`,
    );
  });
}
bootstrap();
