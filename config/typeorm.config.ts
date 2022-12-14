import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Comment } from 'src/comment/comment.entity';
import { Pill } from 'src/pill/pill.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql', // Database 설정
  host: process.env.LAUNCH_ENV === 'docker-compose' ? 'mysqldb' : 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Pill, Comment], // Entity 연결
  synchronize: true, // true 값을 설정하면 어플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해준다.
  migrationsRun: false,
};
