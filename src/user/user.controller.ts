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
  findAll(@Body() userBody: userBody) {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('TimKiemNguoiDung/:id')
  findOne(@Param('id') id: string, @Req() req) {
    try {
      let data = req.user;
      console.log(data);
      return this.userService.findOne(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('CapNhatThongTinNguoiDung/:id')
  update(
    @Param('id') id: string,
    @Param('ho_ten') ho_ten: string,
    @Param('email') email: string,
    @Param('so_dt') so_dt: string,
    @Param('mat_khau') mat_khau: string,
    @Param('loai_nguoi_dung') loai_nguoi_dung: string,
    @Body() userBody: userBody,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return this.userService.update(+id, updateUserDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaNguoiDung/:id')
  remove(@Param('id') id: string) {
    try {
      return this.userService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
