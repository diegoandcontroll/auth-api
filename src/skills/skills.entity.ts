/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heroes } from 'src/heroes/hero.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'skills' })
export class Skills {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  hotkey: string;

  @Column()
  icon: string;

  @Column({ default: false })
  area_attack: boolean;

  @Column()
  type_hability: string;

  @Column()
  type_target: string;

  @Column()
  description: string;

  @Column()
  level_1: string;

  @Column()
  level_2: string;

  @Column()
  level_3: string;

  @Column({ nullable: true })
  level_4: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @ManyToOne(() => Heroes, (heroes) => heroes.skills)
  heroes: Heroes;
}
