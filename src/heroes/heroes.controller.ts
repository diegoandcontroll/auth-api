import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHero } from './dtos/create-heros.dto';
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroesService) {}

  @Get()
  async find() {
    return this.heroService.findHeroes();
  }

  @Post()
  async create(@Body() body: CreateHero) {
    return this.heroService.createHeroes(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.heroService.findOne(id);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.heroService.delete(id);
  }
  @Get('hero/:slug')
  async findSlug(@Param('slug') slug: string) {
    return this.heroService.findSlug(slug);
  }
}
