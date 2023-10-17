import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLoginType } from './entities/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLogin: userLoginType): string | import(".prisma/client").Prisma.PrismaPromise<{
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
    }[]>;
    signUp(userSignUp: nguoi_dung): "Email is already in use" | "Sign up successfully";
}
