import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Patch,
  UseGuards,
  Req,
  Query,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { nguoi_dung } from '@prisma/client';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { type } from 'os';

class userBody {
  @ApiProperty({ type: Number })
  tai_khoan: number;
  @ApiProperty({ type: String })
  ho_ten: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String })
  so_dt: string;
  @ApiProperty({ type: String })
  mat_khau: string;
  @ApiProperty({ type: String })
  loai_nguoi_dung: string;
}

@ApiTags('QuanLyNguoiDung')
@Controller('/api/QuanLyNguoiDung')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('ThemNguoiDung')
  create(
    @Body() createUserDto: nguoi_dung,
    @Body() userBody: userBody,
    @Req() req: Request,
  ) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayDanhSachNguoiDung')
  findAll(
    @Body()
    userBody: userBody,
  ) {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('TimKiemNguoiDung')
  findOne(
    @Query('tai_khoan') id: string,
    @Req() req,
    @Body() userBody: userBody,
  ) {
    try {
      let data = req.user;
      console.log(data);
      return this.userService.findOne(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('CapNhatThongTinNguoiDung')
  update(
    @Query('tai_khoan') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Body() userBody: userBody,
  ) {
    try {
      return this.userService.update(+id, updateUserDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaNguoiDung')
  remove(@Query('tai_khoan') id: string, @Body() userBody: userBody) {
    try {
      return this.userService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('UploadAvatar')
  uploadAvatar(@Query('tai_khoan') id: string) {}
}
