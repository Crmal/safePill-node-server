import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Pill } from 'src/pill/pill.entity';
import { EntityRepository, Repository } from 'typeorm';

import { Comment } from './comment.entity';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async findOneById(pill: Pill) {
    const commentData = await this.findOne({ where: { pill: pill.id } });
    return commentData;
  }

  async findAllById(pill: Pill) {
    const commnetData = await this.find({ where: { pill: pill.id } });
    return commnetData;
  }

  async updateById(pillId: Pill, comment: string) {
    const commnetData = await this.findOneById(pillId);
    commnetData.comment = comment;
    await this.save(commnetData);
    return commnetData;
  }

  async deleteById(commentId: string, userName: string) {
    const commentData = await this.findOne({
      where: { id: commentId },
    });
    if (!commentData) {
      throw new NotFoundException(`해당 ${commentId}는 없습니다.`);
    }
    if (!(commentData?.userName === userName)) {
      throw new UnauthorizedException('권한이 없습니다.');
    }
    await this.remove(commentData);
    return commentData;
  }

  async createById(pill: Pill, comment: string, userName) {
    const commentData = this.create({ comment, pill, userName });
    await this.save(commentData);
    return { comment, userName };
  }
}
