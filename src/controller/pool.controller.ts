import { Controller, Get, Inject, Query } from '@nestjs/common';

import { PoolService } from '@/service/pool.service';
import { ApiResponse } from '@/type/dto/ApiResponse';

@Controller('pools')
export class PoolController {
  constructor(
    @Inject(PoolService)
    private readonly poolService: PoolService,
  ) {}

  @Get()
  async getPoolDetails(@Query('projectId') projectId: string) {
    const result = await this.poolService.getPoolDetails(projectId);
    return ApiResponse.success(result);
  }

  // @Get('test')
  // async test() {
  //   const result = await this.poolService.test();
  //   return ApiResponse.success(result);
  // }
}
