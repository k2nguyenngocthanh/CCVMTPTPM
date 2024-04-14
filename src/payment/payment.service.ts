import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
    prisma = new PrismaClient();

  async create(Payment: Payment) {
    await this.prisma.payment.create({
      data: Payment,
    });
    return 'Data received and processed successfully!';
  }

  async update(id: number, Payment: Payment) {
    await this.prisma.payment.update({
      data: Payment,
      where: {
        id: 1,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.payment.delete({
      where: {
        id: 1,
      },
    });
  }
}
