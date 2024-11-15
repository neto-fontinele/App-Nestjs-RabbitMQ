import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dtos/order-dto';

@Injectable()
export class OrdersService {
  handleOrderPlaced(order: OrderDTO) {
    console.log({ CONSUMER: 'receive a order', message: order });
  }
}
