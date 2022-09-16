import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { UsersModule } from './users/users.module';
import { HeroesModule } from './heroes/heroes.module';
import { TavernModule } from './tavern/tavern.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DbModule,
    AuthModule,
    TokenModule,
    UsersModule,
    HeroesModule,
    TavernModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
