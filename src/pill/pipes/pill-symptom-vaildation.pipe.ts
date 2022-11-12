import { ConflictException, PipeTransform } from '@nestjs/common';

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
    if (!this.isSymptomValid(query?.symptom)) {
      throw new ConflictException(
        `${query?.symptom} 요청은 symptom option이 아닙니다.`,
      );
    }

    return new FindBySymptomDto(query);
  }

  private isSymptomValid(symptom: any) {
    const index = this.PillOptions.indexOf(symptom);
    return index !== -1;
  }
}
