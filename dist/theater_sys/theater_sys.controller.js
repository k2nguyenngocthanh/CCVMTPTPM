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
exports.TheaterSysController = void 0;
const common_1 = require("@nestjs/common");
const theater_sys_service_1 = require("./theater_sys.service");
const update_theater_sy_dto_1 = require("./dto/update-theater_sy.dto");
const swagger_1 = require("@nestjs/swagger");
const theater_sy_entity_1 = require("./entities/theater_sy.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let TheaterSysController = class TheaterSysController {
    constructor(theaterSysService) {
        this.theaterSysService = theaterSysService;
    }
    create(createTheaterSyDto) {
        try {
            return this.theaterSysService.create(createTheaterSyDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findAll() {
        try {
            return this.theaterSysService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updateTheaterSyDto) {
        try {
            return this.theaterSysService.update(+id, updateTheaterSyDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        try {
            return this.theaterSysService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    uploadLogoImage(id, fileUpload) {
        try {
            return this.theaterSysService.uploadLogoImage(Number(id), fileUpload);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TheaterSysController = TheaterSysController;
__decorate([
    (0, common_1.Post)('ThemThongTinHeThongRap'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TheaterSysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('LayThongTinHeThongRap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TheaterSysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)('CapNhatHeThongRap'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_theater_sy_dto_1.UpdateTheaterSyDto]),
    __metadata("design:returntype", void 0)
], TheaterSysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('XoaThongTinHeThongRap'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TheaterSysController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: theater_sy_entity_1.uploadLogoRap,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinh_anh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/logo_img',
            filename: (req, file, callback) => {
                callback(null, new Date().getTime() + '_' + file.originalname);
            },
        }),
    })),
    (0, common_1.Post)('uploadLogoRap'),
    __param(0, (0, common_1.Query)('ma_he_thong_rap')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TheaterSysController.prototype, "uploadLogoImage", null);
exports.TheaterSysController = TheaterSysController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyRap'),
    (0, common_1.Controller)('/api/QuanLyRap'),
    __metadata("design:paramtypes", [theater_sys_service_1.TheaterSysService])
], TheaterSysController);
//# sourceMappingURL=theater_sys.controller.js.map