export class FindByNameDto {
  constructor(query: FindByNameDto) {
    const { page, limit, sort, name } = query;
    this.page = page || 0;
    this.limit = limit || 10;
    this.sort = sort || 'ASC';
    this.name = name;
  }

  /** @type {number}page */
  page;

  limit;

  sort: 'ASC' | 'DESC' = 'ASC';

  name;
}
