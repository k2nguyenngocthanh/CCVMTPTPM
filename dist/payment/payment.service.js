"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PaymentService = class PaymentService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(Payment) {
        await this.prisma.payment.create({
            data: Payment,
        });
        return 'Data received and processed successfully!';
    }
    async update(id, Payment) {
        await this.prisma.payment.update({
            data: Payment,
            where: {
                id: 1,
            },
        });
    }
    async remove(id) {
        await this.prisma.payment.delete({
            where: {
                id: 1,
            },
        });
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
//# sourceMappingURL=payment.service.js.map