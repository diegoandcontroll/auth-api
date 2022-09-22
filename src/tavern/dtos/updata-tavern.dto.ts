import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTavern {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  tavern_url?: string;

  @IsString()
  @IsOptional()
  type?: string;
}
