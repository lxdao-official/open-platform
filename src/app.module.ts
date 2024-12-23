import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AllocationModule } from '@/module/allocation.module';
import { HealthModule } from '@/module/health.module';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    HealthModule,
    AllocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
