import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dtos/order-dto';

@Injectable()
export class OrdersService {
  orders: OrderDTO[] = [];

  handleOrderPlaced(order: OrderDTO) {
    console.log({ CONSUMER: 'receive a order', message: order });

    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}
