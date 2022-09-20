/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skills } from 'src/skills/skills.entity';
import { Tavern } from 'src/tavern/tavern.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @ManyToOne(() => Tavern, (tavern) => tavern.heroes)
  tavern: Tavern;

  @OneToMany(() => Skills, (skills) => skills.heroes)
  skills: Skills[];
}
