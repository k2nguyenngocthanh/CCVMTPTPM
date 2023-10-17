import { TheaterService } from './theater.service';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { rap_phim } from '.prisma/client';
export declare class TheaterController {
    private readonly theaterService;
    constructor(theaterService: TheaterService);
    create(createTheaterDto: rap_phim): Promise<string>;
    findAll(): Promise<{
        ma_rap: number;
        ten_rap: string;
        ma_cum_rap: number;
    }[]>;
    findOne(id: string): Promise<{
        ma_rap: number;
        ten_rap: string;
        ma_cum_rap: number;
    }>;
    update(id: string, updateTheaterDto: UpdateTheaterDto): Promise<string>;
    remove(id: string): Promise<string>;
}
