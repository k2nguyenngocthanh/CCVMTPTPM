/// <reference types="multer" />
import { MovieService } from './movie.service';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Phim } from '.prisma/client';
import { Movie } from './entities/movie.entity';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(createMovieDto: Phim, Movie: Movie): Promise<string>;
    findAll(movie: Movie): Promise<{
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
    findOne(id: string, Movie: Movie): Promise<{
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
    update(id: string, updateMovieDto: UpdateMovieDto, Movie: Movie): Promise<string>;
    remove(id: string, Movie: Movie): Promise<string>;
    uploadMovieImage(id: string, fileUpload: Express.Multer.File): Promise<void>;
}
