import { Injectable } from '@nestjs/common';
import { CreateTheaterSyDto } from './dto/create-theater_sy.dto';
import { UpdateTheaterSyDto } from './dto/update-theater_sy.dto';
import { PrismaClient, he_thong_rap } from '@prisma/client';

@Injectable()
export class TheaterSysService {
  prisma = new PrismaClient();

  async create(createTheaterSyDto: he_thong_rap) {
    await this.prisma.he_thong_rap.create({
      data: createTheaterSyDto,
    });
    return 'This action adds a new theaterSys';
  }

  async findAll() {
    let data = await this.prisma.he_thong_rap.findMany();
    return data;
  }

  async update(id: number, updateTheaterSyDto: UpdateTheaterSyDto) {
    await this.prisma.he_thong_rap.update({
      data: updateTheaterSyDto,
      where: {
        ma_he_thong_rap: id,
      },
    });
    return `ma_he_thong_rap: #${id} update successfully`;
  }

  async remove(id: number) {
    await this.prisma.he_thong_rap.delete({
      where: {
        ma_he_thong_rap: id,
      },
    });
    return `ma_he_thong_rap: #${id} is deleted`;
  }

  async uploadLogoImage(id: number, fileUpload: any) {
    let getLogo = await this.prisma.he_thong_rap.findFirst({
      where: {
        ma_he_thong_rap: id,
      },
    });
    getLogo.logo = fileUpload.filename;
    await this.prisma.he_thong_rap.update({
      data: getLogo,
      where: {
        ma_he_thong_rap: id,
      },
    });
  }
}
