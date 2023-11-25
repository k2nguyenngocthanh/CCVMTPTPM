import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userSignUpType, userLoginType } from './entities/auth.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('QuanLyNguoiDung')
@Controller('/api/QuanLyNguoiDung')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('DangNhap')
  login(@Body() userLoginType: userLoginType) {
    return this.authService.login(userLoginType);
  }

  @Post('DangKy')
  signUp(@Body() userSignUp: userSignUpType) {
    return this.authService.signUp(userSignUp);
  }
}
