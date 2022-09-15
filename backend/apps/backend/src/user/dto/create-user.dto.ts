import {  IsNotEmpty } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({message:"请输入密码"})
  password: string;

  @ApiProperty({ description: '状态' })
  status:number

  @ApiProperty({ description: '用户权限',type:[Number] })
  role:number[]
}

export class LoginDto extends OmitType(CreateUserDto,['role'] as const){}

export class CreateUserRole{
  @IsNotEmpty()
  userId!:number

  @IsNotEmpty()
  roleId!:number
}