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
} from 'sequelize-typescript';
import { Role, User_Role } from '../index';

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
  id!: number;

  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @Column
  lastName: string;

  @Default(true)
  @Column
  isActive: boolean;

  @Column
  age: number;

  @BelongsToMany(() => Role, () => User_Role)
  role: Role[];
}
