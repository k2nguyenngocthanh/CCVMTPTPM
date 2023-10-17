import { MovieService } from './movie.service';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Phim } from '.prisma/client';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<string>;
    remove(id: string): Promise<string>;
}
