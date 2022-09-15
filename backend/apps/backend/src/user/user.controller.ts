import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Version,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {Roles,RolesGuard} from '../auth/role.guard';

@UseGuards(AuthGuard('jwt'),RolesGuard)
@ApiTags('用户数据')
@Controller('api/user')
@ApiBearerAuth()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @ApiOperation({ summary: '查询所有数据' })
  @Get('findALl')
  @ApiResponse({type:CreateUserDto})
  // @Version('1')
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: '根据id查询数据' })
  @Get('find/:id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne('id',id);
  }

  @Roles('update')
  @ApiOperation({ summary: '根据id更新数据' })
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Roles('remove')
  @ApiOperation({ summary: '根据id删除数据' })
  @Delete('delete/:id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.userService.update(id,{
      status:0
    });
  }
}
