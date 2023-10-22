import { AuthService } from './auth.service';
import { nguoiDungDto, userLoginType } from './entities/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string, userLoginType: userLoginType): Promise<string>;
    signUp(userSignUp: nguoiDungDto): "Email is already in use" | "Sign up successfully";
}
