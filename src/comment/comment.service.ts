import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosService } from 'src/axios/axios.service';
import { PillRepository } from 'src/pill/pill-repository';

import { CommentRepository } from './commnet-repository';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentRepository: CommentRepository,
    @InjectRepository(PillRepository)
    private pillRepository: PillRepository,
    private axiosService: AxiosService,
  ) {}

  async getAllComment() {
    const pillData = await this.commentRepository.find({
      order: { createAt: 'DESC' },
    });
    return pillData;
  }

  async getComment(pillId: string) {
    const pillData = await this.pillRepository.findOne({
      where: { id: pillId },
    });
    if (!pillData) {
      throw new NotFoundException('해당 약이 없습니다');
    }

    const commentData = await this.commentRepository.findAllById(pillData);
    return { pill: commentData || null };
  }

  async createComment(pillId: string, comment: string, accessToken: string) {
    const userName = await this.axiosService.getUserName(accessToken);

    const pillData = await this.pillRepository.findOne({
      where: { id: pillId },
    });
    if (!userName) {
      throw new UnauthorizedException('로그인을 해주세요');
    }
    if (!pillData) {
      throw new NotFoundException('해당 약이 없습니다.');
    }
    if (!comment) {
      throw new ConflictException('comment를 입력해주세요');
    }
    return this.commentRepository.createById(pillData, comment, userName);
  }

  async updateComment(pillId: string, comment: string) {
    const pillData = await this.pillRepository.findOne({
      where: { item_seq: pillId },
    });
    return this.commentRepository.updateById(pillData, comment);
  }

  async deleteComment(commentId: string, accessToken: string) {
    const userName = await this.axiosService.getUserName(accessToken);
    return this.commentRepository.deleteById(commentId, userName);
  }
}
