"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTheaterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_theater_dto_1 = require("./create-theater.dto");
class UpdateTheaterDto extends (0, swagger_1.PartialType)(create_theater_dto_1.CreateTheaterDto) {
}
exports.UpdateTheaterDto = UpdateTheaterDto;
//# sourceMappingURL=update-theater.dto.js.map