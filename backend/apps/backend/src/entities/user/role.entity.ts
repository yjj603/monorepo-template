import {
  AutoIncrement,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User, User_Role } from '../index';

@Table({
  freezeTableName: true,
  underscored: true,
  tableName: 'Role',
  timestamps: false,
})
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id!: number;

  @Column
  roleName: string;

  @BelongsToMany(() => User, () => User_Role)
  user: User[];

  /*  @ForeignKey(() => User)
  @Column
  userId: number;*/

  /*  @BelongsTo(() => User, 'userId')
  user: User;*/
}
