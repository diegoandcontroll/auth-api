import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'token' })
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hash: string;

  @Column()
  username: string;
}
