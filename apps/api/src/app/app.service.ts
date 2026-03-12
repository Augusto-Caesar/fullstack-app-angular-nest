import { Injectable } from '@nestjs/common';
import { Message } from '@angular-nest-fullstack-app/interfaces';
@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Hello API' };
  }
}
