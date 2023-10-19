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
    findOne(id: string, req: any, userBody: userBody): Promise<false | {
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
    }>;
    update(id: string, updateUserDto: UpdateUserDto, userBody: userBody): Promise<string>;
    remove(id: string, userBody: userBody): Promise<string>;
    uploadAvatar(id: string): void;
}
export {};
