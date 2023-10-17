import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { PrismaClient, rap_phim } from '.prisma/client';

@Injectable()
export class TheaterService {
  prisma = new PrismaClient();

  async create(createTheaterDto: rap_phim) {
    await this.prisma.rap_phim.create({
      data: createTheaterDto,
    });
    return 'This action adds a new theater';
  }

  async findAll() {
    let data = await this.prisma.rap_phim.findMany();
    return data;
  }

  async findOne(id: number) {
    let data = await this.prisma.rap_phim.findFirst({
      where: {
        ma_rap: id,
      },
    });
    return data;
  }

  async update(id: number, updateTheaterDto: UpdateTheaterDto) {
    let data = await this.prisma.rap_phim.update({
      data: updateTheaterDto,
      where: {
        ma_rap: id,
      },
    });
    return `update: #${id} update successfully`;
  }

  async remove(id: number) {
    await this.prisma.rap_phim.delete({
      where: {
        ma_rap: id,
      },
    });
    return `ma_rap: #${id} is deleted`;
  }
}
