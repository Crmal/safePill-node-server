import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PillRepository } from './pill-repository';

@Module({
  imports: [TypeOrmModule.forFeature([PillRepository])],
})
export class PillModule {}
