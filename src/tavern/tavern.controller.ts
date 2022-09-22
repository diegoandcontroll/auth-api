import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTavern } from './dtos/create-tavern.dto';
import { UpdateTavern } from './dtos/updata-tavern.dto';
import { TavernService } from './tavern.service';

@Controller('tavern')
export class TavernController {
  constructor(private readonly tavernService: TavernService) {}

  @Post()
  async create(@Body() body: CreateTavern) {
    return this.tavernService.createTavern(body);
  }

  @Get()
  async find() {
    return this.tavernService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tavernService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTavern) {
    return this.tavernService.update(id, body);
  }

  @Get(':type')
  async findSentinel(@Param('type') type: string) {
    return this.tavernService.findSentinel(type);
  }
}
