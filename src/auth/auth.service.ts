import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userSignUpType, userLoginType } from './entities/auth.entity';

const bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  prisma = new PrismaClient();

  async login(userLoginType: userLoginType) {
    let user = await this.prisma.nguoi_dung.findFirst({
      where: {
        email: userLoginType.email,
      },
    });
    if (user) {
      const isPasswordValid = await bcrypt.compareSync(
        userLoginType.email,
        userLoginType.mat_khau,
      );
      if (isPasswordValid) {
        const token = this.jwtService.sign(
          { data: 'data' },
          { expiresIn: '5m', secret: this.config.get('SECRET_KEY') },
        );
        return token;
      }
    } else {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  async signUp(userSignUp: userSignUpType) {
    try {
      let isEmailUnique = await this.prisma.nguoi_dung.findFirst({
        where: {
          email: userSignUp.email,
        },
      });
      if (isEmailUnique) {
        return 'Email is already in use';
      } else {
        await this.prisma.nguoi_dung.create({
          data: userSignUp,
        });
      }
      return 'Sign up successfully';
    } catch {
      throw new Error('Sign-up failed');
    }
  }
}
