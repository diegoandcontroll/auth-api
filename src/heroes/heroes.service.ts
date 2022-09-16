import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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
}
