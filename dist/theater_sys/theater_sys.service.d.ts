import { UpdateTheaterSyDto } from './dto/update-theater_sy.dto';
import { PrismaClient, he_thong_rap } from '@prisma/client';
export declare class TheaterSysService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createTheaterSyDto: he_thong_rap): Promise<string>;
    findAll(): Promise<{
        ma_he_thong_rap: number;
        ten_he_thong_rap: string;
        logo: string;
    }[]>;
    update(id: number, updateTheaterSyDto: UpdateTheaterSyDto): Promise<string>;
    remove(id: number): Promise<string>;
    uploadLogoImage(id: number, fileUpload: any): Promise<void>;
}
