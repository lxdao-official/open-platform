import { AllocationController } from '@/controller/allocation.controller';
import { AllocationService } from '@/service/allocation.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AllocationController],
  providers: [AllocationService],
  imports: [],
})
export class AllocationModule {}
