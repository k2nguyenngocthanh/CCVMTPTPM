"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBannerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_banner_dto_1 = require("./create-banner.dto");
class UpdateBannerDto extends (0, swagger_1.PartialType)(create_banner_dto_1.CreateBannerDto) {
}
exports.UpdateBannerDto = UpdateBannerDto;
//# sourceMappingURL=update-banner.dto.js.map