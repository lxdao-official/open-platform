import { Controller, Get, Inject, Query } from '@nestjs/common';

import { PoolService } from '@/service/pool.service';
import { ApiResponse } from '@/type/dto/ApiResponse';
import { GetPoolDetailsDto } from '@/type/dto/pool.dto';

@Controller('pools')
export class PoolController {
  constructor(
    @Inject(PoolService)
    private readonly poolService: PoolService,
  ) {}

  @Get()
  async getPoolDetails(@Query() query: GetPoolDetailsDto) {
    const result = await this.poolService.getPoolDetails(
      query.projectId,
      query.timestampGte,
    );
    return ApiResponse.success(result);
  }

  // @Get('test')
  // async test() {
  //   const result = await this.poolService.test();
  //   return ApiResponse.success(result);
  // }
}
