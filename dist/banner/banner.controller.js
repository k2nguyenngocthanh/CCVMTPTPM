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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const banner_service_1 = require("./banner.service");
const swagger_1 = require("@nestjs/swagger");
const banner_entity_1 = require("./entities/banner.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let BannerController = class BannerController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    findAll(banner) {
        try {
            return this.bannerService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id, Banner) {
        try {
            return this.bannerService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    uploadBannerImage(id, fileUpload) {
        try {
            return this.bannerService.uploadBannerImage(Number(id), fileUpload);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.BannerController = BannerController;
__decorate([
    (0, common_1.Get)('LayDanhSachBanner'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_entity_1.Banner]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('XoaBanner'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, banner_entity_1.Banner]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: banner_entity_1.uploadBannerDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinh_anh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/banner_img',
            filename: (req, file, callback) => {
                callback(null, new Date().getTime() + '_' + file.originalname);
            },
        }),
    })),
    (0, common_1.Post)('UploadHinhBanner'),
    __param(0, (0, common_1.Query)('ma_banner')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "uploadBannerImage", null);
exports.BannerController = BannerController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyPhim'),
    (0, common_1.Controller)('/api/QuanLyPhim'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerController);
//# sourceMappingURL=banner.controller.js.map