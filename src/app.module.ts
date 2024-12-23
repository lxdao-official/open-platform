import { Module } from '@nestjs/common';
import { HealthModule } from './module/health.module';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
