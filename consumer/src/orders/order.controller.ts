import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { OrderDTO } from 'src/dtos/order-dto';
import { OrdersService } from './orders.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrdersService) {}

  @EventPattern('order-placed')
  handleOrderPlaced(@Payload() order: OrderDTO) {
    return this.orderService.handleOrderPlaced(order);
  }

  @MessagePattern({ cmd: 'get-orders' })
  handleGetOrders(@Ctx() context: RmqContext) {
    console.log({
      CONSUMER_CONTROLLER: {
        message: context.getMessage(),
      },
    });

    return this.orderService.getOrders();
  }
}
