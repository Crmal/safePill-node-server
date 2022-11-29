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

  async deleteById(pillId: Pill) {
    const commentData = await this.findOneById(pillId);
    await this.remove(commentData);
    return commentData;
  }

  async createById(pill: Pill, comment: string, userName) {
    const commentData = this.create({ comment, pill, userName });
    await this.save(commentData);
    return { comment, userName };
  }
}
