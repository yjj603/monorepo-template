import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User, Role } from '../index';

@Table({
  freezeTableName: true,
  underscored: true,
  tableName: 'User_Role',
  timestamps: false,
})
export class User_Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Role)
  @Column
  roleId!: number;
}
