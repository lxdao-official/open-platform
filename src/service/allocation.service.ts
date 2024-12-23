import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AllocationService {
  constructor(private prisma: PrismaService) {}

  async getAllocations(wallet: string) {
    const allocations = await this.prisma.allocationDetail.findMany({
      where: {
        wallet: wallet,
      },
    });
    return allocations;
  }

  async test() {
    return await this.prisma.user.findFirst();
  }
}
