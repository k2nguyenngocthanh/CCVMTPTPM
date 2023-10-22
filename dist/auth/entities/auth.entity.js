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
Object.defineProperty(exports, "__esModule", { value: true });
exports.nguoiDungDto = exports.userLoginType = void 0;
const swagger_1 = require("@nestjs/swagger");
class userLoginType {
}
exports.userLoginType = userLoginType;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], userLoginType.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'password' }),
    __metadata("design:type", String)
], userLoginType.prototype, "password", void 0);
class nguoiDungDto {
}
exports.nguoiDungDto = nguoiDungDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], nguoiDungDto.prototype, "tai_khoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], nguoiDungDto.prototype, "ho_ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], nguoiDungDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], nguoiDungDto.prototype, "so_dt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], nguoiDungDto.prototype, "mat_khau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], nguoiDungDto.prototype, "loai_nguoi_dung", void 0);
//# sourceMappingURL=auth.entity.js.map