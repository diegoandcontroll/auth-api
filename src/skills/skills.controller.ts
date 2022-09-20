import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSkills } from './dtos/create-skills.dto';
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
}
