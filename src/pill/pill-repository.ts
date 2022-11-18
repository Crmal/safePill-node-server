import { EntityRepository, Repository } from 'typeorm';

import { FindByNameDto } from './dto/findByName.dto';
import { FindBySymptomDto } from './dto/findBySymptom.dto';
import { Pill } from './pill.entity';

@EntityRepository(Pill)
export class PillRepository extends Repository<Pill> {
  /**
   * 증상을 넘길시 해당 증상을 해결 할 수 있는 약을 검색해주는 함수
   */
  async findPillBySymptom(query: FindBySymptomDto) {
    const pillData = await this.createQueryBuilder('pill')
      .where('pill.ee_doc_data like (:symptom)', {
        symptom: `%${query.symptom}%`,
      })
      .orderBy('item_name', query.sort)
      .offset(query.page * query.limit)
      .limit(query.limit)
      .getMany();
    const count = await this.createQueryBuilder('pill')
      .where('pill.ee_doc_data like (:symptom)', {
        symptom: `%${query.symptom}%`,
      })
      .getCount();
    const nextPage =
      count - query.page * query.limit >= 0 ? query.page + 1 : null;
    const prevPage = query.page === 0 ? null : query.page - 1;
    return { pillData, nextPage, prevPage };
  }

  async findPillByName(query: FindByNameDto) {
    const pillData = await this.createQueryBuilder('pill')
      .where('pill.item_name like (:name)', {
        name: `%${query.name}%`,
      })
      .orderBy('item_name', query.sort)
      .take(query.limit)
      .skip(query.page * query.limit)
      .getMany();
    const count = await this.createQueryBuilder('pill')
      .where('pill.item_name like (:name)', {
        name: `%${query.name}%`,
      })
      .getCount();
    const nextPage =
      count - (query.page + 1) * query.limit >= 0 ? query.page + 1 : null;
    const prevPage = query.page === 0 ? null : query.page - 1;
    return { pillData, nextPage, prevPage };
  }
}
