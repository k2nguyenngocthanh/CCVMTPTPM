import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { nguoi_dung } from '@prisma/client';
declare class userBody {
    tai_khoan: number;
    ho_ten: string;
    email: string;
    so_dt: string;
    mat_khau: string;
    loai_nguoi_dung: string;
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: nguoi_dung, userBody: userBody, req: Request): Promise<string>;
    findAll(userBody: userBody): Promise<{
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
    }[]>;
    findOne(id: string, req: any): Promise<{
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
    }>;
    update(id: string, ho_ten: string, email: string, so_dt: string, mat_khau: string, loai_nguoi_dung: string, userBody: userBody, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: string): Promise<string>;
}
export {};
