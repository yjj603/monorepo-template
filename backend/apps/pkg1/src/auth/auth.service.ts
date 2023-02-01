import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities';
import { Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async login(user: Partial<User>) {
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role.map((v) => v.name),
    };
    const res = {
      token: this.jwtService.sign(payload),
      user,
    };
    await this.cacheManager.set(user.id, user, 86400);
    return res;
  }
}
