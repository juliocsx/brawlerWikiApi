import { classes } from 'src/enum/class.enum';
import { rarity } from 'src/enum/rarity.enum';

export class CreateBrawlerDto {
  name: string;

  description: string;

  class: classes;

  rarity: rarity;

  iconBrawl: string;
}
