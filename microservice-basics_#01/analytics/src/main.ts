import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // This is a hybrid application : TCP + Http
  app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      host: "127.0.0.1",
      port: 3002
    }
  });
  app.startAllMicroservices();
  await app.listen(3002); 
}
bootstrap();
