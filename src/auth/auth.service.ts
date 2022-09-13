import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { User } from './interfaces/user.interface';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private tokenService: TokenService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const isValid = compareSync(pass, user.password);
    if (!isValid) return null;
    const { password, ...rest } = user;
    return rest;
  }

  async login(user: User) {
    const userFind = await this.usersService.findByEmail(user.email);
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    const { password, ...rest } = userFind;
    await this.tokenService.saveToken(token, user.email);
    return {
      user: rest,
      access_token: token,
    };
  }
}
