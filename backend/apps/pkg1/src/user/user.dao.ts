import { Injectable } from '@nestjs/common';
import { User, Role } from '../entities';
import { CreateRoleDto, CreateUserDto } from './dto/create-user.dto';
import { FindUserDto, UpdateUserDto } from './dto/update-user.dto';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserDao {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async createRole(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  async findRole(ids: string[]) {
    return this.roleRepository.findBy({
      id: In(ids),
    });
  }
  async findAllRole() {
    return this.roleRepository.find();
  }
  async create(createUserDto: CreateUserDto<Role>) {
    const create = this.userRepository.create(createUserDto);
    return this.userRepository.save(create);
  }

  async findOne(key, value) {
    return this.userRepository.findOne({
      where: {
        [key]: value,
      },
      relations: ['role'],
    });
  }
  async findALl(findUserDto: FindUserDto) {
    return await this.userRepository.findAndCount({
      relations: ['role'],
      skip: findUserDto.page,
      take: findUserDto.size,
    });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const findOne = await this.findOne('id', id);
    const update = this.userRepository.merge(findOne, updateUserDto);
    return this.userRepository.save(update);
  }
}
