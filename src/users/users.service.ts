import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    return await this.userRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'email',
        'createdAt',
        'updatedAt',
      ],
    });
  }

  async findById(id: string) {
    const user = await this.userRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'email',
        'createdAt',
        'updatedAt',
      ],
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException(`NOT FOUND USER WITH ID - ${id}`);

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UsersEntity[]> {
    if (!createUserDto) {
      throw new HttpException('Body empty', HttpStatus.NO_CONTENT);
    }
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return this.findById(user.id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findBy({ id });

    if (!user) throw new NotFoundException(`NOT FOUND USER WITH ID - ${id}`);

    const userUpdated = await this.userRepository.update(id, updateUserDto);

    return this.findById(id);
  }

  async delete(id: string) {
    const user = await this.userRepository.findBy({ id });

    if (!user) throw new NotFoundException(`NOT FOUND USER WITH ID - ${id}`);

    return await this.userRepository.delete(id);
  }
}
