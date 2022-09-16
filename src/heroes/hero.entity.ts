/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tavern } from 'src/tavern/tavern.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'heroes' })
export class Heroes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  name: string;

  @Column({ name: 'last_name' })
  lastname: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column({ name: 'logo_hero' })
  logo_hero: string;

  @Column({ name: 'animate_hero' })
  animate_hero: string;

  @Column({ name: 'main_attribute' })
  main_attribute: string;

  @Column()
  agility: string;

  @Column()
  force: string;

  @Column()
  intelligence: string;

  @Column({ name: 'health_points' })
  health_points: number;

  @Column({ name: 'mana_points' })
  mana_points: number;

  @OneToMany((type) => Tavern, (tavern) => tavern.id, { eager: true })
  tavern: Tavern[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
