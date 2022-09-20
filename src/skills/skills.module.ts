import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillsProviders } from './skills.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [SkillsService, ...skillsProviders],
  controllers: [SkillsController],
})
export class SkillsModule {}
