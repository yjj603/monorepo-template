import {
  Controller,
  Body,
  Post,
  UseGuards,
  Req,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, LoginDto } from './user/dto/create-user.dto';
import { UserService } from './user/user.service';
import { ConfigService } from '@nestjs/config';

@Controller()
// @UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({ summary: '注册用户' })
  @Post('register')
  async register(@Body() req: CreateUserDto) {
    return this.userService.register(req);
  }

  @ApiOperation({ summary: '登录用户' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Req() req) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: '测试获取环境变量' })
  @Get('getTestName')
  getTestName() {
    return this.configService.get('ENV').name;
  }
}
