import { Comment } from 'src/comment/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { EtcOtcCode } from './dto/etc_otc_code.enum';

@Unique(['item_seq'])
@Entity({ name: 'Pill' })
export class Pill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_seq: string;

  @Column()
  item_name: string;

  @Column()
  entp_name: string;

  @Column({ type: 'enum', enum: EtcOtcCode })
  etc_otc_code: EtcOtcCode;

  @Column()
  materlal_name: string;

  @Column()
  ee_doc_data: string;

  @Column({ nullable: true })
  link: string;

  @OneToMany(() => Comment, (comment) => comment.pill)
  comments: Comment[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
