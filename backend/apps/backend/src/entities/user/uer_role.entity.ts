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
  user_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}
