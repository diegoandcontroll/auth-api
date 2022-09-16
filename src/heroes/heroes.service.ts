import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateHero } from './dtos/create-heros.dto';
import { Heroes } from './hero.entity';

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private readonly heroRepository: Repository<Heroes>,
  ) {}

  async findHeroes(): Promise<Heroes[]> {
    return await this.heroRepository.find();
  }

  async createHeroes(createHeroBody: CreateHero): Promise<Heroes> {
    if (!createHeroBody) new HttpException('NOT BODY', HttpStatus.BAD_REQUEST);

    const hero = this.heroRepository.create(createHeroBody);
    hero.slug.toLowerCase();
    await this.heroRepository.save(hero);

    return hero;
  }

  async findOne(id: string): Promise<Heroes> {
    const hero = await this.heroRepository.findOne({ where: { id } });
    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);

    return hero;
  }

  async findSlug(name: string): Promise<Heroes> {
    name.toLowerCase();
    const hero = await this.heroRepository.findOne({ where: { slug: name } });

    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);

    return hero;
  }
  async delete(id: string): Promise<string> {
    const hero = await this.heroRepository.findOne({ where: { id } });
    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);
    await this.heroRepository.delete(id);
    return 'USER DELETED';
  }
}
