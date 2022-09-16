import { ApiProperty, ApiPropertyOptional, PartialType,IntersectionType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {IsOptional} from 'class-validator'
class OtherUserDto{
  @ApiPropertyOptional({ description: '状态' })
  @IsOptional()
  status:number

}

export class UpdateUserDto extends IntersectionType( PartialType(CreateUserDto),OtherUserDto ){}
