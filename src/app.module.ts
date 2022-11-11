import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'config/typeorm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContraindicateModule } from './contraindicate/contraindicate.module';
import { PillController } from './pill/pill.controller';
import { PillModule } from './pill/pill.module';

const businessModules = [PillModule, ContraindicateModule];

const libModules = [
  ConfigModule.forRoot({
    isGlobal: true, // 전체적으로 사용하기 위해
  }),
  CacheModule.register(),
  TypeOrmModule.forRoot(typeORMConfig),
];

@Module({
  imports: [...libModules, ...businessModules],
  controllers: [AppController, PillController],
  providers: [AppService],
})
export class AppModule {}
