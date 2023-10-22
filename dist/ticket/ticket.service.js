"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TicketService = class TicketService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createTicketDto) {
        await this.prisma.dat_ve.create({
            data: createTicketDto,
        });
        return 'This action adds a new ticket';
    }
    async findAll() {
        let data = await this.prisma.dat_ve.findMany();
        return data;
    }
    async remove(id) {
        await this.prisma.dat_ve.delete({
            where: {
                tai_khoan: id,
            },
        });
        return `tai_khoan: #${id} is deleted`;
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)()
], TicketService);
//# sourceMappingURL=ticket.service.js.map