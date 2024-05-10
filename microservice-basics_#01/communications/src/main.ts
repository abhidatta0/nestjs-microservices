import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport:Transport.TCP,
    options:{
      // the same host and port should be mapped in api-gateway AppModule
      host: "127.0.0.1",
      port: 3001
    }
  });
  await app.listen();
  console.log("Microservice Communications is listening")
}
bootstrap();
