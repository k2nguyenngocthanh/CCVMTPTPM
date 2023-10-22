"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheaterSysService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TheaterSysService = class TheaterSysService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createTheaterSyDto) {
        await this.prisma.he_thong_rap.create({
            data: createTheaterSyDto,
        });
        return 'This action adds a new theaterSys';
    }
    async findAll() {
        let data = await this.prisma.he_thong_rap.findMany();
        return data;
    }
    async update(id, updateTheaterSyDto) {
        await this.prisma.he_thong_rap.update({
            data: updateTheaterSyDto,
            where: {
                ma_he_thong_rap: id,
            },
        });
        return `ma_he_thong_rap: #${id} update successfully`;
    }
    async remove(id) {
        await this.prisma.he_thong_rap.delete({
            where: {
                ma_he_thong_rap: id,
            },
        });
        return `ma_he_thong_rap: #${id} is deleted`;
    }
    async uploadLogoImage(id, fileUpload) {
        let getLogo = await this.prisma.he_thong_rap.findFirst({
            where: {
                ma_he_thong_rap: id,
            },
        });
        getLogo.logo = fileUpload.filename;
        await this.prisma.he_thong_rap.update({
            data: getLogo,
            where: {
                ma_he_thong_rap: id,
            },
        });
    }
};
exports.TheaterSysService = TheaterSysService;
exports.TheaterSysService = TheaterSysService = __decorate([
    (0, common_1.Injectable)()
], TheaterSysService);
//# sourceMappingURL=theater_sys.service.js.map