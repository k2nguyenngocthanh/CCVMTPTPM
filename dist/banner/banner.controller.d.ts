/// <reference types="multer" />
import { BannerService } from './banner.service';
import { Banner } from './entities/banner.entity';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    findAll(banner: Banner): Promise<{
        ma_banner: number;
        ma_phim: number;
        hinh_anh: string;
    }[]>;
    remove(id: string, Banner: Banner): Promise<string>;
    uploadBannerImage(id: string, fileUpload: Express.Multer.File): Promise<void>;
}
