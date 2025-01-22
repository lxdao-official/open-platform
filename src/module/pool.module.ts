import { Module } from '@nestjs/common';

import { PoolController } from '@/controller/pool.controller';
import { PoolService } from '@/service/pool.service';

@Module({
  controllers: [PoolController],
  providers: [PoolService],
  imports: [],
})
export class PoolModule {}
