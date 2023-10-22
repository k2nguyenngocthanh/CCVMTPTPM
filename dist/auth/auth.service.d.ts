import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { nguoiDungDto } from './entities/auth.entity';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    login(email: string, password: string): Promise<string>;
    signUp(userSignUp: nguoiDungDto): "Email is already in use" | "Sign up successfully";
}
