import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateSkills {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  hotkey?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsBoolean()
  @IsOptional()
  area_attack?: boolean;

  @IsString()
  @IsOptional()
  type_hability?: string;

  @IsString()
  @IsOptional()
  type_target?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  level_1?: string;

  @IsString()
  @IsOptional()
  level_2?: string;

  @IsString()
  @IsOptional()
  level_3?: string;

  @IsString()
  @IsOptional()
  level_4?: string;
}
