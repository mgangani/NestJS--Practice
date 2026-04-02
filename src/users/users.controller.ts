import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/{:id}')
  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users with pagination',
    operationId: 'getUsers',
    tags: ['users'],
    responses: {
      '200': {
        description: 'Users fetched successfully',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully',
    // type: [UserDt],
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Limit the number of users to return',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number',
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, page, limit);
  }

  @Post()
  public createUsers(
    @Body() request: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(typeof request);
    return 'You sent a post req to users endpoint';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
