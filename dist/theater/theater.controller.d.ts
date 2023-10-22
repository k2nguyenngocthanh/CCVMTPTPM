import { TheaterService } from './theater.service';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { rap_phim } from '.prisma/client';
import { Theater } from './entities/theater.entity';
export declare class TheaterController {
    private readonly theaterService;
    constructor(theaterService: TheaterService);
    create(createTheaterDto: rap_phim, Theater: Theater): Promise<string>;
    findAll(Theater: Theater): Promise<{
        ma_rap: number;
        ten_rap: string;
        ma_cum_rap: number;
    }[]>;
    update(id: string, updateTheaterDto: UpdateTheaterDto, Theater: Theater): Promise<string>;
    remove(id: string, Theater: Theater): Promise<string>;
}
