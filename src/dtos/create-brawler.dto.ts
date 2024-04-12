import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { classes } from 'src/enum/class.enum';
import { rarity } from 'src/enum/rarity.enum';

export class CreateBrawlerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(classes)
  class: classes;

  @IsNotEmpty()
  @IsString()
  @IsEnum(rarity)
  rarity: rarity;

  @IsNotEmpty()
  @IsString()
  iconBrawl: string;
}
