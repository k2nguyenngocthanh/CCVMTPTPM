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
exports.uploadLogoRap = exports.TheaterSys = void 0;
const swagger_1 = require("@nestjs/swagger");
class TheaterSys {
}
exports.TheaterSys = TheaterSys;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], TheaterSys.prototype, "ma_he_thong_rap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], TheaterSys.prototype, "ten_he_thong_rap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], TheaterSys.prototype, "logo", void 0);
class uploadLogoRap {
}
exports.uploadLogoRap = uploadLogoRap;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'binary' }),
    __metadata("design:type", Object)
], uploadLogoRap.prototype, "hinh_anh", void 0);
//# sourceMappingURL=theater_sy.entity.js.map