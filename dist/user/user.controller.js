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
    findOne(id, req) {
        try {
            let data = req.user;
            console.log(data);
            return this.userService.findOne(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, ho_ten, email, so_dt, mat_khau, loai_nguoi_dung, userBody, updateUserDto) {
        try {
            return this.userService.update(+id, updateUserDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        try {
            return this.userService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
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
    (0, common_1.Get)('TimKiemNguoiDung/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('CapNhatThongTinNguoiDung/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('ho_ten')),
    __param(2, (0, common_1.Param)('email')),
    __param(3, (0, common_1.Param)('so_dt')),
    __param(4, (0, common_1.Param)('mat_khau')),
    __param(5, (0, common_1.Param)('loai_nguoi_dung')),
    __param(6, (0, common_1.Body)()),
    __param(7, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, userBody,
        update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('XoaNguoiDung/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyNguoiDung'),
    (0, common_1.Controller)('/api/QuanLyNguoiDung'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map