import { Body, Controller, Post } from '@nestjs/common';
import { CreateTavern } from './dtos/create-tavern.dto';
import { TavernService } from './tavern.service';

@Controller('tavern')
export class TavernController {
  constructor(private readonly tavernService: TavernService) {}

  @Post()
  async create(@Body() body: CreateTavern) {
    return this.tavernService.createTavern(body);
  }
}
