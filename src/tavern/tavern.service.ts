import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tavern } from './tavern.entity';
import { CreateTavern } from './dtos/create-tavern.dto';
import { Heroes } from 'src/heroes/hero.entity';
import { UpdateTavern } from './dtos/updata-tavern.dto';

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
    return await this.tavernRepository.find({
      relations: {
        heroes: true,
      },
    });
  }

  async findOne(id: string): Promise<Tavern[]> {
    const tavern = await this.tavernRepository.find({
      where: { id },
      relations: {
        heroes: true,
      },
    });
    if (!tavern) new HttpException('TAVERN NOT FOUND', HttpStatus.NOT_FOUND);
    return tavern;
  }

  async update(id: string, updateTavern: UpdateTavern) {
    const tavern = await this.tavernRepository.findBy({ id });
    if (!tavern) new HttpException('TAVERN NOT FOUND', HttpStatus.NOT_FOUND);

    await this.tavernRepository.update(id, updateTavern);

    return await this.tavernRepository.findBy({ id });
  }

  async findSentinel(type: string): Promise<Tavern[]> {
    const tavern = await this.tavernRepository.findBy({ type });
    if (!tavern) new HttpException('TAVERN NOT FOUND', HttpStatus.NOT_FOUND);
    return tavern;
  }
}
