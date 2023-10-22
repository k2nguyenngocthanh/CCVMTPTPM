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
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { nguoi_dung } from '@prisma/client';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { type } from 'os';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User, uploadAvatarDto } from './entities/user.entity';

@ApiTags('QuanLyNguoiDung')
@Controller('/api/QuanLyNguoiDung')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('ThemNguoiDung')
  create(
    @Body() createUserDto: nguoi_dung,
    @Body() User: User,
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
    User: User,
  ) {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('TimKiemNguoiDung')
  findOne(@Query('tai_khoan') id: string, @Req() req, @Body() User: User) {
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
    @Body() User: User,
  ) {
    try {
      return this.userService.update(+id, updateUserDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaNguoiDung')
  remove(@Query('tai_khoan') id: string, @Body() User: User) {
    try {
      return this.userService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: uploadAvatarDto,
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: process.cwd() + '/public/avatar_img',
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname),
      }),
    }),
  )
  @Post('UploadAvatar')
  uploadAvatar(
    @Query('id') id: string,
    @UploadedFile() fileUpload: Express.Multer.File,
  ) {
    try {
      return this.userService.uploadAvatar(Number(id), fileUpload);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
