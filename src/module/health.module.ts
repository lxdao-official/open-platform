import { HealthController } from '@/controller/health.controller';
import { HealthService } from '@/service/health.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [],
})
export class HealthModule {}
