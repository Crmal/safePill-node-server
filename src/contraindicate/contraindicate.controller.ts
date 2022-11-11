import { Controller, Post } from '@nestjs/common';

@Controller('node/contraindicate')
export class ContraindicateController {
  @Post('/')
  async test() {
    return 'test';
  }
}
