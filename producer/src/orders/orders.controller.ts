import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDTO } from './dtos/order-dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('place-order')
  placeOrder(@Body() payload: OrderDTO) {
    return this.ordersService.placeOrder(payload);
  }

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }
}
