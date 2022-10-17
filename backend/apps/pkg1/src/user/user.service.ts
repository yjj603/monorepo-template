import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateRoleDto, CreateUserDto } from './dto/create-user.dto';
import { FindUserDto, UpdateUserDto } from './dto/update-user.dto';
import { UserDao } from './user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}
  async register(createUserDto: CreateUserDto<string>) {
    const user = await this.userDao.findOne('username', createUserDto.username);
    if (user) {
      throw new BadRequestException({
        message: '用户名已存在',
      });
    }
    const role = await this.userDao.findRole(createUserDto.role ?? []);
    const newForm = Object.assign(createUserDto, { role });
    return await this.userDao.create(newForm);
  }
  async findAllRole() {
    return this.userDao.findAllRole();
  }
  async createRole(createRoleDto: CreateRoleDto) {
    return this.userDao.createRole(createRoleDto);
  }

  async findAll(findUserDto: FindUserDto) {
    return await this.userDao.findALl(findUserDto);
  }

  async findOne(key: string, value: any) {
    return this.userDao.findOne(key, value);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userDao.update(id, updateUserDto);
  }
}
