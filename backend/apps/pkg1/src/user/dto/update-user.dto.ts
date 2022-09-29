import {
  ApiPropertyOptional,
  PartialType,
  IntersectionType,
} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { PageNation } from '@malaka/common';
class OtherUserDto {
  @ApiPropertyOptional({ description: '状态' })
  @IsOptional()
  status: number;
}

export class UpdateUserDto extends IntersectionType(
  PartialType(CreateUserDto),
  OtherUserDto,
) {}

export class FindUserDto extends IntersectionType(UpdateUserDto, PageNation) {}
