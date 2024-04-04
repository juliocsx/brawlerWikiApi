import { Module } from '@nestjs/common';
import { BrawlerController } from 'src/controllers/brawler.controller';
import { BrawlerService } from 'src/services/brawler.service';

@Module({
  imports: [],
  controllers: [BrawlerController],
  providers: [BrawlerService],
})
export class BrawlerModule {}
