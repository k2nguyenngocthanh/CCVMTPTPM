import { PrismaClient } from '@prisma/client';
export declare class BannerService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        ma_banner: number;
        ma_phim: number;
        hinh_anh: string;
    }[]>;
    remove(id: number): Promise<string>;
    uploadBannerImage(id: number, fileUpload: any): Promise<void>;
}
