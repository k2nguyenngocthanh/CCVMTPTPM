import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { nguoiDungDto, userLoginType } from './entities/auth.entity';

const bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  prisma = new PrismaClient();

  async login(email: string, password: string) {
    let user = await this.prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      const isPasswordValid = await bcrypt.compareSync(password, user.mat_khau);
      if (isPasswordValid) {
        const token = this.jwtService.sign(
          { data: 'data' },
          { expiresIn: '5m', secret: this.config.get('SECRET_KEY') },
        );
        return token;
      }
    }
    throw new UnauthorizedException('Invalid email or password');
  }

  signUp(userSignUp: nguoiDungDto) {
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
