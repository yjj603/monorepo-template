import { Injectable, HttpException,HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities';
import {UserDao} from './user.dao';
import { DatabaseService } from '@malaka/common/common/database/database.service';

@Injectable()
export class UserService {
  database:any
  transactions:any
  constructor(
    private readonly userDao:UserDao,
    private readonly databaseService:DatabaseService
  ) {
    this.database = this.databaseService.getConnection('r2dbc')
  }
  async register(createUserDto: CreateUserDto){
    const [res,created] = await this.userDao.findOneOrCreateByUsername(createUserDto)
    if(created){
      const {role} = createUserDto
      const bulk = role.map(id=>({
        userId:res.id,
        roleId:id
      }))
      await this.userDao.BulkCreateUserRole(bulk)
    }else{
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll(): Promise<User[]> {
    return this.userDao.findALl()
  }

  async findOne(key:string,value:any) {
    return this.userDao.findOne(key,value)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userDao.update(id,updateUserDto)
  }
}
