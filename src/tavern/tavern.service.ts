import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tavern } from './tavern.entity';
import { CreateTavern } from './dtos/create-tavern.dto';
import { Heroes } from 'src/heroes/hero.entity';

@Injectable()
export class TavernService {
  constructor(
    @Inject('TAVERN_REPOSITORY')
    private readonly tavernRepository: Repository<Tavern>,

    @Inject('HERO_REPOSITORY')
    private readonly heroRepository: Repository<Heroes>,
  ) {}
  async createTavern(data: CreateTavern): Promise<Tavern> {
    if (!data) new HttpException('NOT BODY', HttpStatus.BAD_REQUEST);
    const tavern = this.tavernRepository.create(data);
    return await this.tavernRepository.save(tavern);
  }

  async find(): Promise<Tavern[]> {
    return this.tavernRepository.find({
      relations: {
        heroes: true,
      },
    });
  }
}
