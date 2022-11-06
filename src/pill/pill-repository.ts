import { EntityRepository, Repository } from 'typeorm';

import { Pill } from './pill.entity';

@EntityRepository(Pill)
export class PillRepository extends Repository<Pill> {
  async findAll() {
    const pillData = await this.findAll();
    return pillData;
  }
}
