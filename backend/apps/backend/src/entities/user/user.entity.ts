import { Role } from '../index';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: 1 })
  status: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;

  @ManyToMany(() => Role, (role) => role.user)
  @JoinTable()
  role: Role[];

  // @BeforeUpdate
  // @BeforeCreate
  static async encryptPwd(instance: User) {
    console.log('update');
    instance.password = await bcrypt.hashSync(instance.password);
  }
}
