import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
}
