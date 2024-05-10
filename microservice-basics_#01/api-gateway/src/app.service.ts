import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  constructor(@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }


  createUser(createUserRequest: CreateUserRequest){
    // save user to db

    // send user an email, this will go to our communications service
    this.communicationClient.emit('user_created', new CreateUserEvent(createUserRequest.email))
    this.analyticsClient.emit('user_created', new CreateUserEvent(createUserRequest.email) )
  }
}
