import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHero } from './dtos/create-heros.dto';
import { UpdateHero } from './dtos/update-hero.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Heroes } from './hero.entity';
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroesService) {}

  @Get()
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 100,
  ): Promise<Pagination<Heroes>> {
    limit = limit > 100 ? 100 : limit;
    return this.heroService.paginate({ page, limit });
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
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateHero) {
    return this.heroService.update(id, body);
  }
}
