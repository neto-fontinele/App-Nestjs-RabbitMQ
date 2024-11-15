import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { timeout } from 'rxjs';
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

  getOrders() {
    return this.rabbitClient
      .send({ cmd: 'get-orders' }, {})
      .pipe(timeout(3000)); // O operador timeout é um operador RxJS que aplica um limite de tempo para a execução do Observable. Ele garante que, se o microserviço não responder dentro de 3 segundos (3000 milissegundos), ele lança um erro.
  }
}
