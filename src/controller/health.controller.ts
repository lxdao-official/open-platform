import { Controller, Get } from '@nestjs/common';

import { HealthService } from '@/service/health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly appService: HealthService) {}

  @Get()
  health(): string {
    return this.appService.health();
  }

  // @Get('test')
  // test(): string {
  //   throw new HttpException(CodeEnum.INTERNAL_ERROR, 400);
  // }
}
