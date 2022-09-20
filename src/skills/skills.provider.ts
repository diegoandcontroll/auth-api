import { DataSource } from 'typeorm';
import { Skills } from './skills.entity';

export const skillsProviders = [
  {
    provide: 'SKILLS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Skills),
    inject: ['DATA_SOURCE'],
  },
];
