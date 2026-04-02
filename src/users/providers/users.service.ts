import { BadRequestException, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * UsersService is a service that provides methods to get users from the database
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>) {
  }

  public async createUser( createUserDto: CreateUserDto){
    const existingUSer = await this.usersRepository.findOne({
      where: { email: createUserDto.email}
    });
    if(existingUSer){
      throw new BadRequestException('User already exists');
    }
    let newUSer = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUSer);
  }

  /**
   * Find all users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    page: number,
    limit: number,
  ) {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Alice Doe',
        email: 'alice.doe@example.com',
      },
      {
        id: 3,
        name: 'Bob Doe',
        email: 'bob.doe@example.com',
      },
    ];
  }

  /**
   * Find one user by id
   * @param id - The id of the user
   * @returns The user
   */
  public findOneById(id: string) {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
