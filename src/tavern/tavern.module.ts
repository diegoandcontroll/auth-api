import { forwardRef, Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { tavernProviders } from './tavern.provider';
import { TavernController } from './tavern.controller';
import { TavernService } from './tavern.service';
import { HeroesModule } from 'src/heroes/heroes.module';
import { heroProviders } from 'src/heroes/heroes.provider';
@Module({
  imports: [DbModule],
  providers: [...tavernProviders, TavernService, ...heroProviders],
  controllers: [TavernController],
  exports: [TavernService],
})
export class TavernModule {}
