import { Injectable } from '@nestjs/common';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userLoginType } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  prisma = new PrismaClient();

  login(userLogin: userLoginType) {
    // check email exists
    try {
      const isCheckLogin = this.prisma.nguoi_dung.findMany({
        where: {
          email: userLogin.email,
        },
      });
      return isCheckLogin;
      if (!isCheckLogin) {
        let token = this.jwtService.sign(
          { data: 'data' },
          { expiresIn: '5m', secret: this.config.get('SECRET_KEY') },
        );
        return token;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  signUp(userSignUp: nguoi_dung) {
    // check same email
    try {
      const isEmailUnique = this.prisma.nguoi_dung.findFirst({
        where: {
          email: userSignUp.email,
        },
      });

      if (isEmailUnique) {
        return 'Email is already in use';
      } else {
        this.prisma.nguoi_dung.create({
          data: userSignUp,
        });
      }
      return 'Sign up successfully';
    } catch {
      throw new Error('Sign-up failed');
    }
  }
}
