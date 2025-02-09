import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PoolService {
  constructor(private prisma: PrismaService) {}

  async getPoolDetails(projectId: string, timestampGte: string) {
    const timestampInt =
      timestampGte.length === 13
        ? parseInt(timestampGte)
        : parseInt(timestampGte) * 1000;
    // First get all incentive pools for the project
    const pools = await this.prisma.incentivePool.findMany({
      where: {
        projectId: projectId,
        createAt: {
          gte: new Date(timestampInt),
        },
      },
    });
    const poolSize = pools.length;
    console.log(
      `for project ${projectId}, timestamp >= ${timestampInt}, there are ${poolSize} pools`,
    );
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

        // 查询 allocation title
        const allocation = await this.prisma.allocation.findUnique({
          where: {
            id: pool.allocationId,
          },
          select: {
            title: true,
          },
        });

        return {
          poolId: pool.id,
          poolAddress: pool.address,
          poolCreateAt: pool.createAt,
          allocationId: pool.allocationId,
          allocationTitle: allocation?.title || null,
          projectId: pool.projectId,
          creator: pool.creator,
          depositor: pool.depositor,
          details: details.map((detail) => ({
            ...detail,
            amount: (Number(detail.amount) / 1000000).toString(),
          })),
        };
      }),
    );

    return result;
  }

  async test() {
    return await this.prisma.user.findFirst();
  }
}
