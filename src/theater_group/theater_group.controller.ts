import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TheaterGroupService } from './theater_group.service';
import { CreateTheaterGroupDto } from './dto/create-theater_group.dto';
import { UpdateTheaterGroupDto } from './dto/update-theater_group.dto';
import { ApiTags } from '@nestjs/swagger';
import { TheaterGroup } from './entities/theater_group.entity';

@ApiTags('QuanLyRap')
@Controller('/api/QuanLyRap')
export class TheaterGroupController {
  constructor(private readonly theaterGroupService: TheaterGroupService) {}

  @Post('ThemCumRap')
  create(
    @Body() createTheaterGroupDto: CreateTheaterGroupDto,
    @Body() TheaterGroup: TheaterGroup,
  ) {
    try {
      return this.theaterGroupService.create(createTheaterGroupDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('LayThongTinCumRap')
  findAll(@Body() TheaterGroup: TheaterGroup) {
    try {
      return this.theaterGroupService.findAll();
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('CapNhatCumRap')
  update(
    @Query('id') id: string,
    @Body() updateTheaterGroupDto: UpdateTheaterGroupDto,
  ) {
    try {
      return this.theaterGroupService.update(+id, updateTheaterGroupDto);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('XoaCumRap')
  remove(@Query('id') id: string) {
    try {
      return this.theaterGroupService.remove(+id);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
