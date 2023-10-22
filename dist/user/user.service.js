"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createUserDto) {
        await this.prisma.nguoi_dung.create({
            data: createUserDto,
        });
        return 'This action adds a new user';
    }
    async findAll() {
        let data = await this.prisma.nguoi_dung.findMany({
            where: {
                is_removed: false,
            },
        });
        return data;
    }
    async findOne(id) {
        let user = await this.prisma.nguoi_dung.findFirst({
            where: {
                tai_khoan: id,
                is_removed: false,
            },
        });
        if (user) {
            return user;
        }
        else {
            return false;
        }
    }
    async update(id, updateUserDto) {
        let userUpdate = await this.prisma.nguoi_dung.findFirst({
            where: {
                tai_khoan: id,
            },
        });
        if (userUpdate) {
            await this.prisma.nguoi_dung.update({
                where: {
                    tai_khoan: id,
                },
                data: updateUserDto,
            });
            return `tai_khoan: #${id} update successfully`;
        }
        else {
            return `tai_khoan: #${id} update unsuccessfully`;
        }
    }
    async remove(id) {
        let newData = await this.prisma.nguoi_dung.findFirst({
            where: {
                tai_khoan: id,
            },
        });
        newData.is_removed = true;
        await this.prisma.nguoi_dung.update({
            data: newData,
            where: {
                tai_khoan: id,
            },
        });
        return `tai_khoan: #${id} is deleted`;
    }
    async uploadAvatar(id, fileUpload) {
        let getUser = await this.prisma.nguoi_dung.findFirst({
            where: {
                tai_khoan: id,
            },
        });
        getUser.avatar_img = fileUpload.filename;
        await this.prisma.nguoi_dung.update({
            data: getUser,
            where: {
                tai_khoan: id,
            },
        });
        return fileUpload.fieldname;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map