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
import { TheaterService } from './theater.service';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { ApiTags } from '@nestjs/swagger';
import { rap_phim } from '.prisma/client';

@ApiTags('QuanLyRap')
@Controller('/api/QuanLyRap')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Post('ThemThongTinHeThongRap')
  create(@Body() createTheaterDto: rap_phim) {
    return this.theaterService.create(createTheaterDto);
  }

  @Get('LayThongTinHeThongRap')
  findAll() {
    return this.theaterService.findAll();
  }

  @Get('LayThongTinHeThongRapTheo/:id')
  findOne(@Param('id') id: string) {
    return this.theaterService.findOne(+id);
  }

  @Put('ThongTinHeThongRap/:id')
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theaterService.update(+id, updateTheaterDto);
  }

  @Delete('XoaThongTinHeThongRap/:id')
  remove(@Param('id') id: string) {
    return this.theaterService.remove(+id);
  }
}
