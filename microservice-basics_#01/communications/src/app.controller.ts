import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // listening to 'user_created' pattern from api-gateway
  @EventPattern('user_created')
  async handleUserCreated(data: CreateUserEvent) {
    // business logic
    console.log("handle user created - send email",data.email);
    // email the user
  }
}
