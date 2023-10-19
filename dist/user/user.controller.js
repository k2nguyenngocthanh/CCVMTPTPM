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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
class userBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], userBody.prototype, "tai_khoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userBody.prototype, "ho_ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userBody.prototype, "so_dt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userBody.prototype, "mat_khau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userBody.prototype, "loai_nguoi_dung", void 0);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto, userBody, req) {
        try {
            return this.userService.create(createUserDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findAll(userBody) {
        try {
            return this.userService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findOne(id, req, userBody) {
        try {
            let data = req.user;
            console.log(data);
            return this.userService.findOne(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updateUserDto, userBody) {
        try {
            return this.userService.update(+id, updateUserDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id, userBody) {
        try {
            return this.userService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    uploadAvatar(id) { }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('ThemNguoiDung'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userBody,
        Request]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('LayDanhSachNguoiDung'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userBody]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('TimKiemNguoiDung'),
    __param(0, (0, common_1.Query)('tai_khoan')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, userBody]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('CapNhatThongTinNguoiDung'),
    __param(0, (0, common_1.Query)('tai_khoan')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto,
        userBody]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('XoaNguoiDung'),
    __param(0, (0, common_1.Query)('tai_khoan')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, userBody]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('UploadAvatar'),
    __param(0, (0, common_1.Query)('tai_khoan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadAvatar", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyNguoiDung'),
    (0, common_1.Controller)('/api/QuanLyNguoiDung'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map