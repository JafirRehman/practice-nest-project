import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello  People';
  }

  getBye(): string {
    return 'Good Bye People';
  }
}
