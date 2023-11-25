import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userSignUpType, userLoginType } from './entities/auth.entity';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    login(userLoginType: userLoginType): Promise<string>;
    signUp(userSignUp: userSignUpType): Promise<"Email is already in use" | "Sign up successfully">;
}
