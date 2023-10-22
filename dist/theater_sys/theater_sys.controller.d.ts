/// <reference types="multer" />
import { TheaterSysService } from './theater_sys.service';
import { UpdateTheaterSyDto } from './dto/update-theater_sy.dto';
import { he_thong_rap } from '@prisma/client';
export declare class TheaterSysController {
    private readonly theaterSysService;
    constructor(theaterSysService: TheaterSysService);
    create(createTheaterSyDto: he_thong_rap): Promise<string>;
    findAll(): Promise<{
        ma_he_thong_rap: number;
        ten_he_thong_rap: string;
        logo: string;
    }[]>;
    update(id: string, updateTheaterSyDto: UpdateTheaterSyDto): Promise<string>;
    remove(id: string): Promise<string>;
    uploadLogoImage(id: string, fileUpload: Express.Multer.File): Promise<void>;
}
