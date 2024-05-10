import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { timestamp } from 'rxjs';

@Injectable()
export class AppService {
  // in-memory data store
  private readonly analytics:{ email: string; timestamp: number; }[] = [];

  // this will be accessible as it is a Hybrid application
  getHello(): string {
    return 'Hello World! from Analytics';
  }

  handleUserCreated(data: CreateUserEvent){
    console.log("handleUserCreated ",data.email);
    this.analytics.push({
      email: data.email,
      timestamp:Date.now()
    })
  }
}
