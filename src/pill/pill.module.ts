import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PillRepository } from './pill-repository';
import { PillController } from './pill.controller';
import { PillService } from './pill.service';

@Module({
  imports: [TypeOrmModule.forFeature([PillRepository])],
  controllers: [PillController],
  providers: [PillService],
  exports: [PillService],
})
export class PillModule {}
