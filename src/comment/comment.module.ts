import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AxiosModule } from 'src/axios/axios.module';
import { PillRepository } from 'src/pill/pill-repository';

import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './commnet-repository';

@Module({
  imports: [
    AxiosModule,
    TypeOrmModule.forFeature([CommentRepository, PillRepository]),
  ],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
