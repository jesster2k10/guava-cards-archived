import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SyncController } from './sync/sync.controller';
import { SyncService } from './sync/sync.service';

@Module({
  imports: [],
  controllers: [AppController, SyncController],
  providers: [AppService, SyncService],
})
export class AppModule {}
