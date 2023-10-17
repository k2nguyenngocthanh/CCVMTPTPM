import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLoginType } from './entities/auth.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('QuanLyNguoiDung')
@Controller('/api/QuanLyNguoiDung')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('DangNhap')
  login(@Body() userLogin: userLoginType) {
    return this.authService.login(userLogin);
  }

  @Post('DangKy')
  signUp(@Body() userSignUp: nguoi_dung) {
    return this.authService.signUp(userSignUp);
  }
}
