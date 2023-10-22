import { CreateTheaterGroupDto } from './dto/create-theater_group.dto';
import { UpdateTheaterGroupDto } from './dto/update-theater_group.dto';
import { PrismaClient } from '@prisma/client';
export declare class TheaterGroupService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createTheaterGroupDto: CreateTheaterGroupDto): Promise<string>;
    findAll(): Promise<{
        ma_cum_rap: number;
        ten_cum_rap: string;
        dia_chi: string;
        ma_he_thong_rap: number;
    }[]>;
    update(id: number, updateTheaterGroupDto: UpdateTheaterGroupDto): Promise<string>;
    remove(id: number): Promise<string>;
}
