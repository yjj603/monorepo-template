import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { User } from '../entities';
import { UserService } from '../user/user.service';
import {UnauthorizedException} from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService:UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(user:User) {
    console.log('jwt',user);
    const existUser = await this.userService.findOne('id',user.id)
    console.log('jwt',existUser);
    if (!existUser) {
      throw new UnauthorizedException('token不正确');
    }
    return existUser
  }
}