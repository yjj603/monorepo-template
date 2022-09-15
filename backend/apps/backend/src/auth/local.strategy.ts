import { Strategy,IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import {BadRequestException} from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService:UserService
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne('username',username)
    if (!user) {
      throw new BadRequestException('用户名不正确！');
    }
    if(password !== user.password){
      throw new BadRequestException('密码错误！');
    }
    return user
  }
}