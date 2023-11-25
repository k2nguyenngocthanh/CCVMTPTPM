import { AuthService } from './auth.service';
import { userSignUpType, userLoginType } from './entities/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLoginType: userLoginType): Promise<string>;
    signUp(userSignUp: userSignUpType): Promise<"Email is already in use" | "Sign up successfully">;
}
