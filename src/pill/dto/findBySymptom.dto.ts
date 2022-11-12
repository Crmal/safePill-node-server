export class FindBySymptomDto {
  constructor(query: FindBySymptomDto) {
    const { page, limit, sort, symptom } = query;
    this.page = page || 0;
    this.limit = limit || 10;
    this.sort = sort || 'ASC';
    this.symptom = symptom;
  }

  /** @type {number}page */
  page;

  limit;

  sort: 'ASC' | 'DESC' = 'ASC';

  symptom;
}
