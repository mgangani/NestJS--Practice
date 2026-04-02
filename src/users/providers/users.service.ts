import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';


/**
 * UsersService is a service that provides methods to get users from the database
 */
@Injectable()
export class UsersService {
  /**
   * Find all users
   * @param getUsersParamDto - The parameters to get users
   * @param page - The page number
   * @param limit - The limit of users to return
   * @returns An array of users
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
