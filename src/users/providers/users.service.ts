import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {

    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService : AuthService){}
    public findAll(getUsersParamDto : GetUsersParamDto, page : number, limit : number) {

            const isAuthenticated = this.authService.isAuthenticated("token");
            console.log(isAuthenticated);
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com'
            },
            {
                id: 2,
                name: 'Alice Doe',
                email: 'alice.doe@example.com'
            },
            {
                id: 3,
                name: 'Bob Doe',
                email: 'bob.doe@example.com'
            }
        ]
    }

    public findOneById (id : string) {
        return {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    }
}