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
    const pillBySymptomData = await this.pillRepository.findPillBySymptom(
      query,
    );
    const pillCountData = await this.pillRepository.count();
    return { count: pillCountData, pill: pillBySymptomData };
  }

  async findPillByName(query: FindByNameDto) {
    const pillByNameData = await this.pillRepository.findPillByName(query);
    const pillCountData = await this.pillRepository.count();
    return { count: pillCountData, pill: pillByNameData };
  }
}
