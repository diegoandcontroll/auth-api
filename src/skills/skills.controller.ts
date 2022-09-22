import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSkills } from './dtos/create-skills.dto';
import { UpdateSkills } from './dtos/update-skills.dto';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() body: CreateSkills) {
    return this.skillsService.createSkill(body);
  }

  @Get()
  async find() {
    return this.skillsService.find();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateSkills) {
    return this.skillsService.update(id, body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.skillsService.findById(id);
  }
}
