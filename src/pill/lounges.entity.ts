import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EtcOtcCode } from './dto/etc_otc_code.dto';

@Entity()
export class Pill {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  item_seq: string;

  @Column()
  item_name: string;

  @Column()
  entp_name: string;

  @Column()
  etc_otc_code: EtcOtcCode;

  @Column()
  materlal_name: string;

  @Column()
  ee_doc_data: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
