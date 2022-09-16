import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RefreshTokenDto } from 'src/token/dtos/refresh-token.dto';
import { TokenService } from 'src/token/token.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private tokenService: TokenService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return await this.tokenService.refreshToken(data.oldToken);
  }
}
