import { Controller, Get, Post } from '@nestjs/common';

@Controller('sync')
export class SyncController {
  @Get()
  pullChanges(): string {
    return 'Pull Changes';
  }

  @Post()
  pushChanges(): string {
    return 'push changes';
  }
}
