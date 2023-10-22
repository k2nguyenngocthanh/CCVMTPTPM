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
  Query,
} from '@nestjs/common';
import { TheaterService } from './theater.service';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { ApiTags } from '@nestjs/swagger';
import { rap_phim } from '.prisma/client';
import { Theater } from './entities/theater.entity';

@ApiTags('QuanLyRap')
@Controller('/api/QuanLyRap')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Post('ThemThongTinRap')
  create(@Body() createTheaterDto: rap_phim, @Body() Theater: Theater) {
    try {
      return this.theaterService.create(createTheaterDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayThongRap')
  findAll(@Body() Theater: Theater) {
    try {
      return this.theaterService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('CapNhatRap')
  update(
    @Query('id') id: string,
    @Body() updateTheaterDto: UpdateTheaterDto,
    @Body() Theater: Theater,
  ) {
    try {
      return this.theaterService.update(+id, updateTheaterDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaThongTinRap')
  remove(@Query('id') id: string, @Body() Theater: Theater) {
    try {
      return this.theaterService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
