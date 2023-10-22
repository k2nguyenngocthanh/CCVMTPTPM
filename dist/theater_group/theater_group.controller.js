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
exports.TheaterGroupController = void 0;
const common_1 = require("@nestjs/common");
const theater_group_service_1 = require("./theater_group.service");
const create_theater_group_dto_1 = require("./dto/create-theater_group.dto");
const update_theater_group_dto_1 = require("./dto/update-theater_group.dto");
const swagger_1 = require("@nestjs/swagger");
const theater_group_entity_1 = require("./entities/theater_group.entity");
let TheaterGroupController = class TheaterGroupController {
    constructor(theaterGroupService) {
        this.theaterGroupService = theaterGroupService;
    }
    create(createTheaterGroupDto, TheaterGroup) {
        try {
            return this.theaterGroupService.create(createTheaterGroupDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findAll(TheaterGroup) {
        try {
            return this.theaterGroupService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updateTheaterGroupDto) {
        try {
            return this.theaterGroupService.update(+id, updateTheaterGroupDto);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        try {
            return this.theaterGroupService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('BE Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TheaterGroupController = TheaterGroupController;
__decorate([
    (0, common_1.Post)('ThemCumRap'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_theater_group_dto_1.CreateTheaterGroupDto,
        theater_group_entity_1.TheaterGroup]),
    __metadata("design:returntype", void 0)
], TheaterGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('LayThongTinCumRap'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [theater_group_entity_1.TheaterGroup]),
    __metadata("design:returntype", void 0)
], TheaterGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)('CapNhatCumRap'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_theater_group_dto_1.UpdateTheaterGroupDto]),
    __metadata("design:returntype", void 0)
], TheaterGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('XoaCumRap'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TheaterGroupController.prototype, "remove", null);
exports.TheaterGroupController = TheaterGroupController = __decorate([
    (0, swagger_1.ApiTags)('QuanLyRap'),
    (0, common_1.Controller)('/api/QuanLyRap'),
    __metadata("design:paramtypes", [theater_group_service_1.TheaterGroupService])
], TheaterGroupController);
//# sourceMappingURL=theater_group.controller.js.map