import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PoolService {
  constructor(private prisma: PrismaService) {}

  async getPoolDetails(projectId: string) {
    // First get all incentive pools for the project
    const pools = await this.prisma.incentivePool.findMany({
      where: {
        projectId: projectId,
      },
    });
    const poolSize = pools.length;
    console.log(`for project ${projectId} found ${poolSize} pools`);
    // For each pool, get its details and format the response
    const result = await Promise.all(
      pools.map(async (pool) => {
        const details = await this.prisma.incentivePoolDetail.findMany({
          where: {
            poolId: pool.id,
          },
          select: {
            wallet: true,
            amount: true,
            ratio: true,
            token: true,
            status: true,
          },
        });

        return {
          projectId: pool.projectId,
          poolId: pool.id,
          poolAddress: pool.address,
          creator: pool.creator,
          depositor: pool.depositor,
          details: details,
        };
      }),
    );

    return result;
  }

  async test() {
    return await this.prisma.user.findFirst();
  }
}
