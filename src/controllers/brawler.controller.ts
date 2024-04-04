import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrawlerService } from '../services/brawler.service';
import { CreateBrawlerDto } from 'src/dtos/create-brawler.dto';

@Controller('brawler')
export class BrawlerController {
  constructor(private readonly brawlerService: BrawlerService) {}

  @Post()
  async create(@Body() body: CreateBrawlerDto) {
    return await this.brawlerService.create(body);
  }

  @Get()
  async findAll() {
    return await this.brawlerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.brawlerService.findOne(id);
  }
}
