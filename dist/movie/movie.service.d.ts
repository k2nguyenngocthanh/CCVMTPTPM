import { UpdateMovieDto } from './dto/update-movie.dto';
import { Phim, PrismaClient } from '.prisma/client';
export declare class MovieService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createMovieDto: Phim): Promise<string>;
    findAll(): Promise<{
        ma_phim: number;
        ten_phim: string;
        trailer: string;
        hinh_anh: string;
        mo_ta: string;
        ngay_khoi_chieu: Date;
        danh_gia: number;
        hot: boolean;
        dang_chieu: boolean;
        sap_chieu: boolean;
    }[]>;
    findOne(id: number): Promise<{
        ma_phim: number;
        ten_phim: string;
        trailer: string;
        hinh_anh: string;
        mo_ta: string;
        ngay_khoi_chieu: Date;
        danh_gia: number;
        hot: boolean;
        dang_chieu: boolean;
        sap_chieu: boolean;
    }>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<string>;
    remove(id: number): Promise<string>;
    uploadMovieImage(id: number, fileUpload: any): Promise<void>;
}
