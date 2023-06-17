import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;
}
