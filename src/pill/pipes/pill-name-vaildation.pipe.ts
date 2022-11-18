import { ConflictException, PipeTransform } from '@nestjs/common';
import { isNaN } from 'lodash';

import { FindByNameDto } from '../dto/findByName.dto';

export class PillNameValidationPipe implements PipeTransform {
  transform(query: FindByNameDto) {
    const { page, limit, sort } = new FindByNameDto(query);

    if (!this.isNumberValid(page)) {
      throw new ConflictException(`${page} 요청은 page option이 아닙니다.`);
    }

    if (!this.isNumberValid(limit)) {
      throw new ConflictException(`${limit} 요청은 limit option이 아닙니다.`);
    }

    if (!this.isSortValid(sort)) {
      throw new ConflictException(`${sort} 요청은 sort option이 아닙니다.`);
    }
    // eslint-disable-next-line no-param-reassign
    query.page = parseInt(page, 10);
    // eslint-disable-next-line no-param-reassign
    query.limit = parseInt(limit, 10);
    return new FindByNameDto(query);
  }

  private isNumberValid(value: any): boolean {
    const validData = isNaN(Number(value));
    return !validData;
  }

  private isSortValid(sort: any): boolean {
    const sortFilter = ['ASC', 'DESC'];
    const vaildData = sortFilter.includes(sort);
    return vaildData;
  }
}
