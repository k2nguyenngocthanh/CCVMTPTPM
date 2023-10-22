import { PrismaClient } from '@prisma/client';
export declare class TicketService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createTicketDto: VarDate): Promise<string>;
    findAll(): Promise<any>;
    remove(id: number): Promise<string>;
}
