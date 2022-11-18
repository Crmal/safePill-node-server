import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindByNameDto } from './dto/findByName.dto';
import { FindBySymptomDto } from './dto/findBySymptom.dto';
import { PillRepository } from './pill-repository';

@Injectable()
export class PillService {
  constructor(
    @InjectRepository(PillRepository)
    private pillRepository: PillRepository,
  ) {}

  async findPillBySymptom(query: FindBySymptomDto) {
    const { pillData, nextPage, prevPage } =
      await this.pillRepository.findPillBySymptom(query);
    return { prevPage, nextPage, pill: pillData };
  }

  async findPillByName(query: FindByNameDto) {
    const { pillData, nextPage, prevPage } =
      await this.pillRepository.findPillByName(query);
    return { prevPage, nextPage, pill: pillData };
  }
}
