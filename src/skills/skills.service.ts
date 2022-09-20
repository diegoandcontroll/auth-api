import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSkills } from './dtos/create-skills.dto';
import { Skills } from './skills.entity';

@Injectable()
export class SkillsService {
  constructor(
    @Inject('SKILLS_REPOSITORY')
    private readonly skillsRepository: Repository<Skills>,
  ) {}

  async createSkill(data: CreateSkills): Promise<Skills> {
    if (!data) new HttpException('NOT BODY', HttpStatus.BAD_REQUEST);
    const skill = this.skillsRepository.create(data);
    return await this.skillsRepository.save(skill);
  }

  async find(): Promise<Skills[]> {
    return this.skillsRepository.find();
  }
}
