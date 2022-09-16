import { Controller, Get } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroesService) {}

  @Get()
  async find() {
    return this.heroService.findHeroes();
  }
}
