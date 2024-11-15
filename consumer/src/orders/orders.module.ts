import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrderController],
  providers: [OrdersService],
})
export class OrdersModule {}
