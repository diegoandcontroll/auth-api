import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

import { TokenEntity } from './token.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<TokenEntity>,
    private userService: UsersService,

    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async saveToken(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { username },
    });
    if (!objToken) {
      const token = this.tokenRepository.create({
        username,
        hash,
      });
      await this.tokenRepository.save(token);
    } else {
      await this.tokenRepository.update(objToken.id, {
        hash: hash,
        username: username,
      });
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { hash: oldToken },
    });

    if (!objToken) {
      throw new HttpException(
        {
          errorMessage: 'INVALID_TOKEN',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const user = await this.userService.findByEmail(objToken.username);
    return this.authService.login(user);
  }
}
