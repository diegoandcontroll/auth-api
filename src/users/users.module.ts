import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db/db.module';
import { userProviders } from './users.provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DbModule, forwardRef(() => AuthModule)],
  providers: [UsersService, ...userProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
