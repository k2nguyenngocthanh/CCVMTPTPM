import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, nguoi_dung } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async create(createUserDto: nguoi_dung) {
    await this.prisma.nguoi_dung.create({
      data: createUserDto,
    });
    return 'This action adds a new user';
  }

  async findAll() {
    let data = await this.prisma.nguoi_dung.findMany({
      where: {
        is_removed: false,
      },
    });
    return data;
  }

  async findOne(id: number) {
    let data = await this.prisma.nguoi_dung.findFirst({
      where: {
        tai_khoan: id,
        is_removed: false,
      },
    });
    return data;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.prisma.nguoi_dung.update({
      data: updateUserDto,
      where: {
        tai_khoan: id,
      },
    });
    return `tai_khoan: #${id} update successfully`;
  }

  async remove(id: number) {
    let newData = await this.prisma.nguoi_dung.findFirst({
      where: {
        tai_khoan: id,
      },
    });
    newData.is_removed = true;
    await this.prisma.nguoi_dung.update({
      data: newData,
      where: {
        tai_khoan: id,
      },
    });
    return `tai_khoan: #${id} is deleted`;
  }
}
