import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('node/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/:pillId')
  async getComment(@Param('pillId') pillId: string) {
    return this.commentService.getComment(pillId);
  }

  @Post('/:pillId')
  async createComment(
    @Headers('accessToken') accessToken: string,
    @Param('pillId') pillId: string,
    @Body('comment') comment: string,
  ) {
    return this.commentService.createComment(pillId, comment, accessToken);
  }

  @Put('/:pillId')
  async updateComment(
    @Param('pillId') pillId: string,
    @Body('comment') comment: string,
  ) {
    return this.commentService.updateComment(pillId, comment);
  }

  @Delete('/:pillId')
  async deleteComment(@Param('pillId') pillId: string) {
    return this.commentService.deleteComment(pillId);
  }
}
