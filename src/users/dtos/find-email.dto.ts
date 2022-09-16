import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class FindUserEmail {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
