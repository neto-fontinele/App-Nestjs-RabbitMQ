import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderDTO } from 'src/dtos/order-dto';
import { OrdersService } from './orders.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrdersService) {}

  @EventPattern('order-placed')
  handleOrderPlaced(@Payload() order: OrderDTO) {
    return this.orderService.handleOrderPlaced(order);
  }
}
