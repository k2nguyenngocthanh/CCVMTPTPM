import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Put,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TheaterSysService } from './theater_sys.service';
import { CreateTheaterSyDto } from './dto/create-theater_sy.dto';
import { UpdateTheaterSyDto } from './dto/update-theater_sy.dto';
import { he_thong_rap } from '@prisma/client';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { uploadLogoRap } from './entities/theater_sy.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('QuanLyRap')
@Controller('/api/QuanLyRap')
export class TheaterSysController {
  constructor(private readonly theaterSysService: TheaterSysService) {}

  @Post('ThemThongTinHeThongRap')
  create(@Body() createTheaterSyDto: he_thong_rap) {
    try {
      return this.theaterSysService.create(createTheaterSyDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayThongTinHeThongRap')
  findAll() {
    try {
      return this.theaterSysService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('CapNhatHeThongRap')
  update(
    @Query('id') id: string,
    @Body() updateTheaterSyDto: UpdateTheaterSyDto,
  ) {
    try {
      return this.theaterSysService.update(+id, updateTheaterSyDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaThongTinHeThongRap')
  remove(@Query('id') id: string) {
    try {
      return this.theaterSysService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: uploadLogoRap,
  })
  @UseInterceptors(
    FileInterceptor('hinh_anh', {
      storage: diskStorage({
        destination: process.cwd() + '/public/logo_img',
        filename: (req, file, callback) => {
          callback(null, new Date().getTime() + '_' + file.originalname);
        },
      }),
    }),
  )
  @Post('uploadLogoRap')
  uploadLogoImage(
    @Query('ma_he_thong_rap') id: string,
    @UploadedFile() fileUpload: Express.Multer.File,
  ) {
    try {
      return this.theaterSysService.uploadLogoImage(Number(id), fileUpload);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
