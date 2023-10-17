import { PrismaClient, nguoi_dung } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userLoginType } from './entities/auth.entity';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
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
