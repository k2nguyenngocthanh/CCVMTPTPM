import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Phim, PrismaClient } from '.prisma/client';

@Injectable()
export class MovieService {
  prisma = new PrismaClient();

  async create(createMovieDto: Phim) {
    await this.prisma.phim.create({
      data: createMovieDto,
    });
    return 'This action adds a new movie';
  }

  async findAll() {
    let data = await this.prisma.phim.findMany();
    return data;
  }

  async findOne(id: number) {
    let data = await this.prisma.phim.findFirst({
      where: {
        ma_phim: id,
      },
    });
    return data;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    await this.prisma.phim.update({
      data: updateMovieDto,
      where: {
        ma_phim: id,
      },
    });
    return `ma_phim: #${id} update successfully`;
  }

  async remove(id: number) {
    await this.prisma.phim.delete({
      where: {
        ma_phim: id,
      },
    });
    return `ma_phim: #${id} is deleted`;
  }

  async uploadMovieImage(id: number, fileUpload: any) {
    let getMovie = await this.prisma.phim.findFirst({
      where: {
        ma_phim: id,
      },
    });
    getMovie.hinh_anh = fileUpload.filename;
    await this.prisma.phim.update({
      data: getMovie,
      where: {
        ma_phim: id,
      },
    });
  }
}
