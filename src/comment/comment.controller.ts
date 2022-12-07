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
    const pillData = await this.commentService.getComment(pillId);
    return pillData;
  }

  @Get()
  async getAllComment() {
    const pillData = await this.commentService.getAllComment();
    return pillData;
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

  @Delete('/:commentId')
  async deleteComment(
    @Headers('accessToken') accessToken: string,
    @Param('commentId') commentId: string,
  ) {
    return this.commentService.deleteComment(commentId, accessToken);
  }
}
