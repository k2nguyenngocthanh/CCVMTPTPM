"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheaterService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require(".prisma/client");
let TheaterService = class TheaterService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createTheaterDto) {
        await this.prisma.rap_phim.create({
            data: createTheaterDto,
        });
        return 'This action adds a new theater';
    }
    async findAll() {
        let data = await this.prisma.rap_phim.findMany();
        return data;
    }
    async findOne(id) {
        let data = await this.prisma.rap_phim.findFirst({
            where: {
                ma_rap: id,
            },
        });
        return data;
    }
    async update(id, updateTheaterDto) {
        let data = await this.prisma.rap_phim.update({
            data: updateTheaterDto,
            where: {
                ma_rap: id,
            },
        });
        return `update: #${id} update successfully`;
    }
    async remove(id) {
        await this.prisma.rap_phim.delete({
            where: {
                ma_rap: id,
            },
        });
        return `ma_rap: #${id} is deleted`;
    }
};
exports.TheaterService = TheaterService;
exports.TheaterService = TheaterService = __decorate([
    (0, common_1.Injectable)()
], TheaterService);
//# sourceMappingURL=theater.service.js.map