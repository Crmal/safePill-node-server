import { ConflictException, PipeTransform } from '@nestjs/common';
import { isNaN } from 'lodash';

import { FindBySymptomDto } from '../dto/findBySymptom.dto';

export class PillSymptomValidationPipe implements PipeTransform {
  readonly PillOptions = [
    '두통',
    '기침',
    '위염',
    '소화불량',
    '몸살',
    '비염',
    '두드러기',
    '관절염',
    '코막힘',
    '콧물',
  ];

  transform(query: FindBySymptomDto) {
    const { page, limit, sort, symptom } = new FindBySymptomDto(query);

    if (!this.isSymptomValid(symptom)) {
      throw new ConflictException(
        `${symptom} 요청은 symptom option이 아닙니다.`,
      );
    }

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

    return new FindBySymptomDto(query);
  }

  private isSymptomValid(symptom: any): boolean {
    const index = this.PillOptions.indexOf(symptom);
    return index !== -1;
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
