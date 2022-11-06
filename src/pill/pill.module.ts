import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PillRepository } from './pill-repository';
import { PillService } from './pill.service';

@Module({
  imports: [TypeOrmModule.forFeature([PillRepository])],
  providers: [PillService],
})
export class PillModule {}
