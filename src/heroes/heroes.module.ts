import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { TavernModule } from 'src/tavern/tavern.module';
import { HeroesController } from './heroes.controller';
import { heroProviders } from './heroes.provider';
import { HeroesService } from './heroes.service';

@Module({
  imports: [DbModule, TavernModule],
  providers: [HeroesService, ...heroProviders],
  controllers: [HeroesController],
  exports: [HeroesService],
})
export class HeroesModule {}
