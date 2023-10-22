"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require(".prisma/client");
let MovieService = class MovieService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createMovieDto) {
        await this.prisma.phim.create({
            data: createMovieDto,
        });
        return 'This action adds a new movie';
    }
    async findAll() {
        let data = await this.prisma.phim.findMany();
        return data;
    }
    async findOne(id) {
        let data = await this.prisma.phim.findFirst({
            where: {
                ma_phim: id,
            },
        });
        return data;
    }
    async update(id, updateMovieDto) {
        await this.prisma.phim.update({
            data: updateMovieDto,
            where: {
                ma_phim: id,
            },
        });
        return `ma_phim: #${id} update successfully`;
    }
    async remove(id) {
        await this.prisma.phim.delete({
            where: {
                ma_phim: id,
            },
        });
        return `ma_phim: #${id} is deleted`;
    }
    async uploadMovieImage(id, fileUpload) {
        let getMovie = await this.prisma.phim.findFirst({
            where: {
                ma_phim: id,
            },
        });
        getMovie.hinh_anh = fileUpload.filename;
        await this.prisma.phim.update({
            data: getMovie,
            where: {
                ma_phim: id,
            },
        });
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)()
], MovieService);
//# sourceMappingURL=movie.service.js.map