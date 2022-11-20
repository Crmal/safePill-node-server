import { Controller } from '@nestjs/common';

@Controller('node/comment')
export class CommentController {
  async getComment() {
    return 'getComment';
  }
}
