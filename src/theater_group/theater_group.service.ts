import { Injectable } from '@nestjs/common';
import { CreateTheaterGroupDto } from './dto/create-theater_group.dto';
import { UpdateTheaterGroupDto } from './dto/update-theater_group.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TheaterGroupService {
  prisma = new PrismaClient();
  async create(createTheaterGroupDto: CreateTheaterGroupDto) {
    await this.prisma.cum_rap.create({
      data: createTheaterGroupDto,
    });
    return 'This action adds a new theaterGroup';
  }

  async findAll() {
    let data = await this.prisma.cum_rap.findMany();
    return data;
  }

  async update(id: number, updateTheaterGroupDto: UpdateTheaterGroupDto) {
    await this.prisma.cum_rap.update({
      data: updateTheaterGroupDto,
      where: {
        ma_cum_rap: id,
      },
    });
    return `ma_cum_rap: #${id} update successfully`;
  }

  async remove(id: number) {
    await this.prisma.cum_rap.delete({
      where: {
        ma_cum_rap: id,
      },
    });
    return 'ma_cum_rap: #${id} is deleted';
  }
}
