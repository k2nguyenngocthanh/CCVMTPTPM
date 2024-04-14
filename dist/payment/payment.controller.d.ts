import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    update(Payment: Payment): Promise<void>;
    sortObject(obj: any): {};
}
