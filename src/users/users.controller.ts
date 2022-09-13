import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FindUserEmail } from './dto/find-email.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  find() {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
  @Post('/email')
  async findByEmail(@Body() body: FindUserEmail) {
    return this.userService.findByEmail(body.email);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
