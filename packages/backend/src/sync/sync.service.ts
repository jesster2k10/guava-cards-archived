import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}
}
