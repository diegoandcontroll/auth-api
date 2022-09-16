import { DataSource } from 'typeorm';
import { Tavern } from './tavern.entity';

export const tavernProviders = [
  {
    provide: 'TAVERN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tavern),
    inject: ['DATA_SOURCE'],
  },
];
