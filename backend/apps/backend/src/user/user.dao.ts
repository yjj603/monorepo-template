import { Injectable } from '@nestjs/common';
import { User, Role } from '../entities';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserDao {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findOneOrCreateByUsername(createUserDto: CreateUserDto) {
    /*return  await User.findOrCreate({
      where:{
        username:{
          [Op.eq]:createUserDto.username
        }
      },
      defaults:{...createUserDto}
    })*/
    return null;
  }
  async BulkCreateUserRole(createUserRole: any[]) {
    // return await User_Role.bulkCreate(createUserRole)
    return null;
  }

  async create(createUserDto: LoginDto) {
    return this.userRepository.save(createUserDto);
  }

  async findOne(key, value) {
    return this.userRepository.findOneBy({
      [key]: value,
    });
  }
  async findALl() {
    /*return await User.findAll({
      include:Role
    })*/
    return null;
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    /*return await User.update(updateUserDto,{
      where:{
        id
      }
    })*/
    return null;
  }
}
