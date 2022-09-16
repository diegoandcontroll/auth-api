import { IsString, IsNotEmpty } from 'class-validator';
import { Heroes } from '../../heroes/hero.entity';
export class CreateTavern {
  @IsString()
  @IsNotEmpty()
  name: string;

  heros: Heroes;
}
