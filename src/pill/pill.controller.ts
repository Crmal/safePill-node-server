import { Controller, Get, Query } from '@nestjs/common';

import { FindByNameDto } from './dto/findByName.dto';
import { FindBySymptomDto } from './dto/findBySymptom.dto';
import { PillService } from './pill.service';
import { PillNameValidationPipe } from './pipes/pill-name-vaildation.pipe';
import { PillSymptomValidationPipe } from './pipes/pill-symptom-vaildation.pipe';

@Controller('node/pill')
export class PillController {
  constructor(private readonly pillService: PillService) {}

  @Get('/symptom')
  async findPillBySymptom(
    @Query('', PillSymptomValidationPipe) query: FindBySymptomDto,
  ) {
    return this.pillService.findPillBySymptom(query);
  }

  @Get('name')
  async findPillByName(
    @Query('', PillNameValidationPipe) query: FindByNameDto,
  ) {
    return this.pillService.findPillByName(query);
  }
}
