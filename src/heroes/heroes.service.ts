import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

import { TavernService } from 'src/tavern/tavern.service';
import { Repository } from 'typeorm';
import { CreateHero } from './dtos/create-heros.dto';
import { UpdateHero } from './dtos/update-hero.dto';
import { Heroes } from './hero.entity';

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private readonly heroRepository: Repository<Heroes>,

    @Inject(forwardRef(() => TavernService))
    private tavernService: TavernService,
  ) {}

  async findHeroes(): Promise<Heroes[]> {
    return await this.heroRepository.find({
      relations: {
        tavern: true,
        skills: true,
      },
    });
  }

  async createHeroes(createHeroBody: CreateHero): Promise<Heroes> {
    createHeroBody.slug.toLowerCase();
    if (!createHeroBody) new HttpException('NOT BODY', HttpStatus.BAD_REQUEST);

    const hero = this.heroRepository.create(createHeroBody);

    hero.slug.toLowerCase();

    return await this.heroRepository.save(hero);
  }

  async findOne(id: string): Promise<Heroes> {
    const hero = await this.heroRepository.findOne({
      where: { id },
      relations: {
        skills: true,
      },
    });
    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);

    return hero;
  }

  async findSlug(name: string): Promise<Heroes> {
    name.toLowerCase();
    const hero = await this.heroRepository.findOne({
      where: { slug: name },
      relations: {
        skills: true,
      },
    });

    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);

    return hero;
  }
  async paginate(options: IPaginationOptions): Promise<Pagination<Heroes>> {
    return paginate<Heroes>(this.heroRepository, options);
  }
  async delete(id: string): Promise<string> {
    const hero = await this.heroRepository.findOne({ where: { id } });
    if (!hero) new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);
    await this.heroRepository.delete(id);
    return 'USER DELETED';
  }

  async update(id: string, UpdateHero: UpdateHero) {
    const hero = await this.heroRepository.findBy({ id });

    if (!hero) {
      throw new HttpException('HERO NOT FOUND', HttpStatus.NOT_FOUND);
    }

    await this.heroRepository.update(id, UpdateHero);

    return this.heroRepository.findBy({ id });
  }
}
