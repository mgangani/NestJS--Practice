import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {

    constructor( private readonly usersService: UsersService){}


    public finaAll(userId : string) {
        const user = this.usersService.findOneById(userId);
        return {
            id: 1,
            title: 'Post 1',
            content: 'Content 1',
            user: user
        }
    }
}
