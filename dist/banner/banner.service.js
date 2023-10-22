"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let BannerService = class BannerService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll() {
        let data = await this.prisma.banner.findMany();
        return data;
    }
    async remove(id) {
        await this.prisma.banner.delete({
            where: {
                ma_banner: id,
            },
        });
        return `ma_banner: #${id} is deleted`;
    }
    async uploadBannerImage(id, fileUpload) {
        let getBanner = await this.prisma.banner.findFirst({
            where: {
                ma_banner: id,
            },
        });
        getBanner.hinh_anh = fileUpload.fieldname;
        await this.prisma.banner.update({
            data: getBanner,
            where: {
                ma_banner: id,
            },
        });
    }
};
exports.BannerService = BannerService;
exports.BannerService = BannerService = __decorate([
    (0, common_1.Injectable)()
], BannerService);
//# sourceMappingURL=banner.service.js.map