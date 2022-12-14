import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { Skills } from 'src/skills/skills.entity';

import { Tavern } from 'src/tavern/tavern.entity';
export class CreateHero {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  logo_hero: string;

  @IsString()
  @IsNotEmpty()
  animate_hero: string;

  @IsString()
  @IsNotEmpty()
  main_attribute: string;

  @IsString()
  @IsNotEmpty()
  agility: string;

  @IsString()
  @IsNotEmpty()
  force: string;

  @IsString()
  @IsNotEmpty()
  intelligence: string;

  @IsNumber()
  @IsNotEmpty()
  health_points: number;

  @IsNumber()
  @IsNotEmpty()
  mana_points: number;

  @IsString()
  @IsNotEmpty()
  tavern: Tavern;

  @IsOptional()
  skills: Skills[];
}
