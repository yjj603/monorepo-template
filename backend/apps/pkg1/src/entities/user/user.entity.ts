import { Role } from '../index';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 1,
  })
  status: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;

  @ManyToMany(() => Role, (role) => role.user)
  @JoinTable()
  role: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}
