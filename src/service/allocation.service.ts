import { Injectable } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AllocationService {
  constructor(private prisma: PrismaService) {}
}
