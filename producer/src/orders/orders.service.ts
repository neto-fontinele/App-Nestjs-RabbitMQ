import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { OrderDTO } from './dtos/order-dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_SERVICE')
    private rabbitClient: ClientProxy,
  ) {}

  @MessagePattern('order-placed')
  placeOrder(order: OrderDTO) {
    this.rabbitClient.emit('order-placed', order);

    console.log({ PRODUCER: { status: 'message sent!', order: order } });

    return { message: 'Order Placed!' };
  }
}
