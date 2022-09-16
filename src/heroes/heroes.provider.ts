import { DataSource } from 'typeorm';
import { Heroes } from './hero.entity';

export const heroProviders = [
  {
    provide: 'HERO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Heroes),
    inject: ['DATA_SOURCE'],
  },
];
