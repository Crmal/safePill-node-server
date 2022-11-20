import { Pill } from 'src/pill/pill.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Comment' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pill, (pill) => pill.item_seq)
  pill: Pill;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
