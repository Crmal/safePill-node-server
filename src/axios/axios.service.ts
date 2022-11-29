import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}

  async getUserName(accessToken: string): Promise<any> {
    const requestConfig = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    try {
      const userName = await lastValueFrom(
        this.httpService
          .get('http://localhost:8080/java/auth', requestConfig)
          .pipe(map((res) => res.data.result.data.username)),
      );
      return userName;
    } catch (e) {
      throw new NotFoundException('요청한 회원을 찾을 수 없습니다.');
    }
  }
}
