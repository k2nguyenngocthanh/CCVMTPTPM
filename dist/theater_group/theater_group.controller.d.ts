import { TheaterGroupService } from './theater_group.service';
import { CreateTheaterGroupDto } from './dto/create-theater_group.dto';
import { UpdateTheaterGroupDto } from './dto/update-theater_group.dto';
import { TheaterGroup } from './entities/theater_group.entity';
export declare class TheaterGroupController {
    private readonly theaterGroupService;
    constructor(theaterGroupService: TheaterGroupService);
    create(createTheaterGroupDto: CreateTheaterGroupDto, TheaterGroup: TheaterGroup): Promise<string>;
    findAll(TheaterGroup: TheaterGroup): Promise<{
        ma_cum_rap: number;
        ten_cum_rap: string;
        dia_chi: string;
        ma_he_thong_rap: number;
    }[]>;
    update(id: string, updateTheaterGroupDto: UpdateTheaterGroupDto): Promise<string>;
    remove(id: string): Promise<string>;
}
