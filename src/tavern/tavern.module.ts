import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { tavernProviders } from './tavern.provider';
import { TavernController } from './tavern.controller';
import { TavernService } from './tavern.service';
import { HeroesModule } from 'src/heroes/heroes.module';
@Module({
  imports: [DbModule, HeroesModule],
  providers: [...tavernProviders, TavernService],
  controllers: [TavernController],
})
export class TavernModule {}
