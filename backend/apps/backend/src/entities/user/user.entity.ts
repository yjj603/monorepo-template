import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
  BeforeCreate,
  BeforeUpdate
} from 'sequelize-typescript';
import { Role, User_Role } from '../index';
import * as bcrypt from 'bcryptjs'
import {Exclude} from 'class-transformer';

@Table({
  freezeTableName: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @Column
  username: string;


  @Column
  // @Exclude()
  password:string

  @Default(1)
  @Column
  status: number;

  @BelongsToMany(() => Role, () => User_Role)
  role: Role[];

  @BeforeUpdate
  // @BeforeCreate
  static async encryptPwd(instance:User){
    console.log('update');
    instance.password = await bcrypt.hashSync(instance.password)
  }
}
