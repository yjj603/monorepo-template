import { Injectable } from '@nestjs/common';
import {User,User_Role,Role} from '../entities';
import {Op} from 'sequelize'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserDao {
  constructor() {
  }
  async findOneOrCreateByUsername(createUserDto: CreateUserDto){
    return  await User.findOrCreate({
      where:{
        username:{
          [Op.eq]:createUserDto.username
        }
      },
      defaults:{...createUserDto}
    })
  }
  async BulkCreateUserRole(createUserRole:any[]){
    return await User_Role.bulkCreate(createUserRole)
  }
  async findOne(key,value){
    const res =  await User.findOne({
      where:{
        [key]:{
          [Op.eq]:value
        },
        // include:Role
      },
    })
    return res
  }
  async findALl(){
    return await User.findAll({
      include:Role
    })
  }
}
