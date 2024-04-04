import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { BrawlerModule } from './modules/brawler.module';

@Module({
  imports: [
    DatabaseModule,
    BrawlerModule
  ],
})
export class AppModule {}
