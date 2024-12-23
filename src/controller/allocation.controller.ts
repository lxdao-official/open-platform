import { AllocationService } from '@/service/allocation.service';

import { Controller, Inject } from '@nestjs/common';

@Controller('allocation')
export class AllocationController {
  constructor(
    @Inject(AllocationService)
    private readonly allocationService: AllocationService,
  ) {}

  // @Get('list')
  // async getAllocations(@Query() query: AllocationListQuery) {
  //   const result = await this.allocationService.getAllocationList(query);
  //   return ApiResponse.success(result);
  // }

  // @Post('create')
  // async createAllocation(@Body() body: CreateAllocationBody) {
  //   const result = await this.allocationService.create(body);
  //   return ApiResponse.success(result);
  // }

  // @Put(':allocationId/updateState')
  // async updateAllocationState(
  //   @Param('contributionId') contributionId: string,
  //   @Body() body: UpdateAllocationStatusBody,
  // ) {
  //   const result = await this.allocationService.updateAllocationState(
  //     contributionId,
  //     body,
  //   );
  //   return ApiResponse.success(result);
  // }
}
