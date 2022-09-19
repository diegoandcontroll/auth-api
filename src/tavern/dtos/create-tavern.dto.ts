import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Heroes } from '../../heroes/hero.entity';
export class CreateTavern {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  tavern_url: string;
}
