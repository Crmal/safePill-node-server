import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  async getComment() {
    return 'getComment';
  }
}
