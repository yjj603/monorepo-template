import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, OmitType, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto<T> {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '请输入用户名' })
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '请输入密码' })
  password: string;

  @ApiPropertyOptional({ description: '用户权限' })
  @IsOptional()
  role: T[];
}

export class LoginDto extends OmitType(CreateUserDto, ['role'] as const) {}

export class CreateRoleDto {
  @ApiProperty({ description: '权限' })
  @IsNotEmpty({ message: '请输入权限' })
  name: string;
}
