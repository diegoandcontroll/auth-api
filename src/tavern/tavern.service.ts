import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tavern } from './tavern.entity';
import { CreateTavern } from './dtos/create-tavern.dto';

@Injectable()
export class TavernService {
  constructor(
    @Inject('TAVERN_REPOSITORY')
    private readonly tavernRepository: Repository<Tavern>,
  ) {}
  async createTavern(data: CreateTavern): Promise<Tavern> {
    if (!data) new HttpException('NOT BODY', HttpStatus.BAD_REQUEST);
    const tavern = this.tavernRepository.create(data);
    return tavern;
  }
}
