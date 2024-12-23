import { Controller, Get, Inject, Query } from '@nestjs/common';

import { AllocationService } from '@/service/allocation.service';
import { ApiResponse } from '@/type/dto/ApiResponse';

@Controller('allocation')
export class AllocationController {
  constructor(
    @Inject(AllocationService)
    private readonly allocationService: AllocationService,
  ) {}

  @Get()
  async getAllocations(@Query('wallet') wallet: string) {
    const result = await this.allocationService.getAllocations(wallet);
    return ApiResponse.success(result);
  }

  // @Get('test')
  // async test() {
  //   const result = await this.allocationService.test();
  //   return ApiResponse.success(result);
  // }
}
