import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Contraindicate' })
export class Contraindicate {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  pill_a: string;

  @Column()
  company_a: string;

  @Column()
  pill_b: string;

  @Column()
  company_b: string;

  @Column()
  symptom: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
