import { Body, Controller, HttpException, HttpStatus, Put } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Put('process')
  update(@Body() Payment: Payment) {
    try {
      console.log('Payment', Payment);
      return this.paymentService.update(1, Payment);
    } catch (error) {
      throw new HttpException('BE Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public sortObject(obj) {
    const sorted = {};
    const str = [];
    let key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
    }
    return sorted;
  }
}
