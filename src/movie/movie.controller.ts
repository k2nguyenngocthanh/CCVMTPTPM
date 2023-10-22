import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  Req,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Phim } from '.prisma/client';
import { Movie, uploadMovieDto } from './entities/movie.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('QuanLyPhim')
@Controller('/api/QuanLyPhim')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('CapNhatPhimUpload')
  create(@Body() createMovieDto: Phim, @Body() Movie: Movie) {
    try {
      return this.movieService.create(createMovieDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayDanhSachPhim')
  findAll(@Body() movie: Movie) {
    try {
      return this.movieService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayDanhSachPhimTheo')
  findOne(@Query('id') id: string, @Body() Movie: Movie) {
    try {
      return this.movieService.findOne(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('SuaDoiPhim')
  update(
    @Query('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
    @Body() Movie: Movie,
  ) {
    try {
      return this.movieService.update(+id, updateMovieDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaPhim')
  remove(@Query('id') id: string, @Body() Movie: Movie) {
    try {
      return this.movieService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: uploadMovieDto,
  })
  @UseInterceptors(
    FileInterceptor('hinh_anh', {
      storage: diskStorage({
        destination: process.cwd() + '/public/movie_img',
        filename: (req, file, callback) => {
          callback(null, new Date().getTime() + '_' + file.originalname);
        },
      }),
    }),
  )
  @Post('UploadHinhPhim')
  uploadMovieImage(
    @Query('ma_phim') id: string,
    @UploadedFile() fileUpload: Express.Multer.File,
  ) {
    try {
      return this.movieService.uploadMovieImage(Number(id), fileUpload);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
