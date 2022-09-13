import { forwardRef, Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { tokenProviders } from './token.provider';
import { TokenService } from './token.service';

import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DbModule, forwardRef(() => AuthModule), UsersModule],
  providers: [TokenService, ...tokenProviders],
  exports: [TokenService],
  controllers: [],
})
export class TokenModule {}
