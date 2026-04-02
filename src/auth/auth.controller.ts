import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    public login(email: string , password: string, id: string)
    {
        return this.authService.login(email, password, id);
    }

    public isAuthenticated(token: string)
    {
        return true;
    }
}
