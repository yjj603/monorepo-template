import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class PageNation {
  @ApiPropertyOptional({ description: '排序属性' })
  @IsOptional()
  @IsString()
  orderBy: string;

  @ApiPropertyOptional({ description: '排序' })
  @IsOptional()
  @IsString()
  order: string;

  @IsOptional()
  @ApiPropertyOptional({ description: '分组属性' })
  groupBy: string[];

  @ApiPropertyOptional({ description: '分页大小', default: 10 })
  @IsOptional()
  @Min(1)
  @Max(100)
  @IsNumber()
  @Transform(({ value }) => (value ? parseInt(value) : 10))
  size: number;

  @ApiPropertyOptional({ description: '分页页码', default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => (value ? parseInt(value) : 1))
  page: number;
}

export class TimePageNation extends PageNation {
  @ApiPropertyOptional({ description: '时间范围' })
  @IsOptional()
  @IsArray()
  @Transform(({ value }: any) =>
    value == '' ? undefined : value.map((item: string) => parseInt(item)),
  )
  range?: number[];
}

export class IdDto {
  @ApiProperty({ description: 'id' })
  @IsString()
  id: string;
}
