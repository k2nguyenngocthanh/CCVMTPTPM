import { UpdateTheaterDto } from './dto/update-theater.dto';
import { PrismaClient, rap_phim } from '.prisma/client';
export declare class TheaterService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createTheaterDto: rap_phim): Promise<string>;
    findAll(): Promise<{
        ma_rap: number;
        ten_rap: string;
        ma_cum_rap: number;
    }[]>;
    findOne(id: number): Promise<{
        ma_rap: number;
        ten_rap: string;
        ma_cum_rap: number;
    }>;
    update(id: number, updateTheaterDto: UpdateTheaterDto): Promise<string>;
    remove(id: number): Promise<string>;
}
