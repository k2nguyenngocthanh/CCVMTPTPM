"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTheaterGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_theater_group_dto_1 = require("./create-theater_group.dto");
class UpdateTheaterGroupDto extends (0, swagger_1.PartialType)(create_theater_group_dto_1.CreateTheaterGroupDto) {
}
exports.UpdateTheaterGroupDto = UpdateTheaterGroupDto;
//# sourceMappingURL=update-theater_group.dto.js.map