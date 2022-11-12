import { EntityRepository, Repository } from 'typeorm';

import { FindBySymptomDto } from './dto/findBySymptom.dto';
import { Pill } from './pill.entity';

@EntityRepository(Pill)
export class PillRepository extends Repository<Pill> {
  /**
   * 증상을 넘길시 해당 증상을 해결 할 수 있는 약을 검색해주는 함수
   */
  async findPillBySymptom(query: FindBySymptomDto): Promise<Pill[]> {
    const pillData = await this.createQueryBuilder('pill')
      .where('pill.ee_doc_data like (:symptom)', {
        symptom: `%${query.symptom}%`,
      })
      .orderBy('item_name', query.sort)
      .take(query.limit)
      .skip(query.page)
      .getMany();
    return pillData;
  }
}
