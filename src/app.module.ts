import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { HealthModule } from '@/module/health.module';
import { PoolModule } from '@/module/pool.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), HealthModule, PoolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
