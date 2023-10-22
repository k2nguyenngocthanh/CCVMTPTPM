import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, nguoi_dung } from '@prisma/client';
export declare class UserService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createUserDto: nguoi_dung): Promise<string>;
    findAll(): Promise<{
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
        avatar_img: string;
    }[]>;
    findOne(id: number): Promise<false | {
        tai_khoan: number;
        ho_ten: string;
        email: string;
        so_dt: string;
        mat_khau: string;
        loai_nguoi_dung: string;
        is_removed: boolean;
        avatar_img: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: number): Promise<string>;
    uploadAvatar(id: number, fileUpload: any): Promise<any>;
}
