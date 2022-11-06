import { EntityRepository, Repository } from 'typeorm';

import { Contraindicate } from './contraindicate.entity';

@EntityRepository(Contraindicate)
export class ContraindicatelRepository extends Repository<Contraindicate> {
  async findAll() {
    const contraindicateData = await this.findAll();
    return contraindicateData;
  }
}
