import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateHero {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  logo_hero?: string;

  @IsString()
  @IsOptional()
  animate_hero?: string;

  @IsString()
  @IsOptional()
  main_attribute?: string;

  @IsString()
  @IsOptional()
  agility?: string;

  @IsString()
  @IsOptional()
  force?: string;

  @IsString()
  @IsOptional()
  intelligence?: string;

  @IsNumber()
  @IsOptional()
  health_points?: number;

  @IsNumber()
  @IsOptional()
  mana_points?: number;
}
