"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const swagger_1 = require("@nestjs/swagger");
const movie_entity_1 = require("./entities/movie.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    create(createMovieDto, Movie) {
        try {
            return this.movieService.create(createMovieDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findAll(movie) {
        try {
            return this.movieService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findOne(id, Movie) {
        try {
            return this.movieService.findOne(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updateMovieDto, Movie) {
        try {
            return this.movieService.update(+id, updateMovieDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id, Movie) {
        try {
            return this.movieService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    uploadMovieImage(id, fileUpload) {
        try {
            return this.movieService.uploadMovieImage(Number(id), fileUpload);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Post)('CapNhatPhimUpload'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, movie_entity_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('LayDanhSachPhim'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_entity_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('LayDanhSachPhimTheo'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movie_entity_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('SuaDoiPhim'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_dto_1.UpdateMovieDto,
        movie_entity_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('XoaPhim'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movie_entity_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: movie_entity_1.uploadMovieDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinh_anh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/movie_img',
            filename: (req, file, callback) => {
                callback(null, new Date().getTime() + '_' + file.originalname);
            },
        }),
    })),
    (0, common_1.Post)('UploadHinhPhim'),
    __param(0, (0, common_1.Query)('ma_phim')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "uploadMovieImage", null);
exports.MovieController = MovieController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyPhim'),
    (0, common_1.Controller)('/api/QuanLyPhim'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map