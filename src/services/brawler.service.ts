import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBrawlerDto } from 'src/dtos/create-brawler.dto';
import { Brawler } from 'src/models/brawler.model';

@Injectable()
export class BrawlerService {
  public async create(CreateBrawlerDto: CreateBrawlerDto) {
    try {
      const brawler = new Brawler()

      const nameAlreadyExists = await Brawler.findOne({where: {name: CreateBrawlerDto.name}})
      if (nameAlreadyExists) {
        throw new HttpException("Brawler name already exists", HttpStatus.BAD_REQUEST)
      }

      brawler.name = CreateBrawlerDto.name
      brawler.description = CreateBrawlerDto.description
      brawler.rarity = CreateBrawlerDto.rarity
      brawler.class = CreateBrawlerDto.class
      brawler.iconBrawl = CreateBrawlerDto.iconBrawl

      await brawler.save()
      return brawler
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  public async findAll() {
    return await Brawler.findAll();
  }

  public async findOne(id: string) {
    return await Brawler.findByPk(id);
  }
}
