import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

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
    return pillBySymptomData;
  }
}
