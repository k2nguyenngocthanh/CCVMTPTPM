import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { Phim } from '.prisma/client';

@ApiTags('QuanLyPhim')
@Controller('/api/QuanLyPhim')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('CapNhatPhimUpload')
  create(@Body() createMovieDto: Phim) {
    return this.movieService.create(createMovieDto);
  }

  @Get('LayDanhSachPhim')
  findAll() {
    return this.movieService.findAll();
  }

  @Get('LayDanhSachPhimTheo/:id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(+id);
  }

  @Put('SuaDoiPhim/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete('XoaPhim/:id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
