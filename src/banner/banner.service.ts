import { Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BannerService {
  prisma = new PrismaClient();
  async findAll() {
    let data = await this.prisma.banner.findMany();
    return data;
  }

  async remove(id: number) {
    await this.prisma.banner.delete({
      where: {
        ma_banner: id,
      },
    });
    return `ma_banner: #${id} is deleted`;
  }

  async uploadBannerImage(id: number, fileUpload: any) {
    let getBanner = await this.prisma.banner.findFirst({
      where: {
        ma_banner: id,
      },
    });
    getBanner.hinh_anh = fileUpload.fieldname;
    await this.prisma.banner.update({
      data: getBanner,
      where: {
        ma_banner: id,
      },
    });
  }
}
