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
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Banner, uploadBannerDto } from './entities/banner.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('QuanLyPhim')
@Controller('/api/QuanLyPhim')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get('LayDanhSachBanner')
  findAll(@Body() banner: Banner) {
    try {
      return this.bannerService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaBanner')
  remove(@Query('id') id: string, @Body() Banner: Banner) {
    try {
      return this.bannerService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: uploadBannerDto,
  })
  @UseInterceptors(
    FileInterceptor('hinh_anh', {
      storage: diskStorage({
        destination: process.cwd() + '/public/banner_img',
        filename: (req, file, callback) => {
          callback(null, new Date().getTime() + '_' + file.originalname);
        },
      }),
    }),
  )
  @Post('UploadHinhBanner')
  uploadBannerImage(
    @Query('ma_banner') id: string,
    @UploadedFile() fileUpload: Express.Multer.File,
  ) {
    try {
      return this.bannerService.uploadBannerImage(Number(id), fileUpload);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
