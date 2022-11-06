import { Body, Controller, Post } from '@nestjs/common';

@Controller('contraindicate')
export class ContraindicateController {
  @Post('/')
  async fillData(@Body() a) {
    return a;
  }
}
