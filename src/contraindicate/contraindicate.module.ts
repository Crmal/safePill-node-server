import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContraindicateController } from './contraindicate.controller';
import { Contraindicate } from './contraindicate.entity';
import { ContraindicateService } from './contraindicate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contraindicate])],
  controllers: [ContraindicateController],
  providers: [ContraindicateService],
})
export class ContraindicateModule {}
