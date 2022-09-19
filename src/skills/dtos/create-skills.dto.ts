import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { Heroes } from 'src/heroes/hero.entity';

export class CreateSkills {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  hotkey: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsBoolean()
  @IsNotEmpty()
  area_attack: boolean;

  @IsString()
  @IsNotEmpty()
  type_hability: string;

  @IsString()
  @IsNotEmpty()
  type_target: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  level_1: string;

  @IsString()
  @IsNotEmpty()
  level_2: string;

  @IsString()
  @IsNotEmpty()
  level_3: string;

  @IsString()
  @IsNotEmpty()
  level_4: string;
}
