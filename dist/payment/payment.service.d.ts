import { PrismaClient } from '@prisma/client';
import { Payment } from './entities/payment.entity';
export declare class PaymentService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(Payment: Payment): Promise<string>;
    update(id: number, Payment: Payment): Promise<void>;
    remove(id: number): Promise<void>;
}
