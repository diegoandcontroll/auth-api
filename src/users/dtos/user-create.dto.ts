import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from 'src/utils/messages.helper';
import { RegExHelper } from 'src/utils/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
  password: string;
}
