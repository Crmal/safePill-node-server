import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'config/typeorm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosModule } from './axios/axios.module';
import { CommentModule } from './comment/comment.module';
import { PillModule } from './pill/pill.module';

const businessModules = [PillModule, CommentModule, AxiosModule];

const libModules = [
  ConfigModule.forRoot({
    isGlobal: true, // 전체적으로 사용하기 위해
  }),
  CacheModule.register(),
  TypeOrmModule.forRoot(typeORMConfig),
  HttpModule,
];

@Module({
  imports: [...libModules, ...businessModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
