/// <reference types="multer" />
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { nguoi_dung } from '@prisma/client';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: nguoi_dung, User: User, req: Request): Promise<string>;
    findAll(User: User): Promise<{
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
        avatar_img: string;
    }[]>;
    findOne(id: string, req: any, User: User): Promise<false | {
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
        avatar_img: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto, User: User): Promise<string>;
    remove(id: string, User: User): Promise<string>;
    uploadAvatar(id: string, fileUpload: Express.Multer.File): Promise<any>;
}
