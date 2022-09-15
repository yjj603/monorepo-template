import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService:UserService,
    private readonly jwtService:JwtService
  ) {}

  async login(user: Partial<User>) {
    const payload = {
      id:user.id,
      username:user.username,
      // role:user.role.toString()
    };
    return {
      token: this.jwtService.sign(payload),
      user
    };
  }
}
