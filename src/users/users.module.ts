import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db/db.module';
import { userProviders } from './users.provider';

@Module({
  imports: [DbModule],
  providers: [UsersService, ...userProviders],
  controllers: [UsersController],
})
export class UsersModule {}
