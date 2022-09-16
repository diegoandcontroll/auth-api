import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'heroes' })
export class Heroes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  name: string;

  @Column({ name: 'logo_hero' })
  logoHero: string;

  @Column({ name: 'animate_hero' })
  animate_hero: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'main_attribute' })
  mainAttribute: string;

  @Column()
  agility: number;

  @Column()
  force: number;

  @Column()
  intelligence: number;

  @Column({ name: 'health_points' })
  healthPoints: number;

  @Column({ name: 'mana_points' })
  manaPoints: number;

  @Column()
  tavern: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
