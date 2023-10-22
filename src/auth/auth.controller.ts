import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { nguoiDungDto, userLoginType } from './entities/auth.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('QuanLyNguoiDung')
@Controller('/api/QuanLyNguoiDung')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('DangNhap/:email/:password')
  login(
    @Param('email') email: string,
    @Query('password') password: string,
    @Body() userLoginType: userLoginType,
  ) {
    return this.authService.login(email, password);
  }

  @Post('DangKy')
  signUp(@Body() userSignUp: nguoiDungDto) {
    return this.authService.signUp(userSignUp);
  }
}
