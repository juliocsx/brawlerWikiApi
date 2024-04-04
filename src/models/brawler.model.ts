import { UUID } from 'crypto';
import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { classes } from 'src/enum/class.enum';
import { rarity } from 'src/enum/rarity.enum';

@Table({ freezeTableName: true })
export class Brawler extends Model<Brawler> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  public id;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(rarity),
    allowNull: false,
  })
  rarity: rarity;

  @Column({
    type: DataType.ENUM,
    values: Object.values(classes),
    allowNull: false,
  })
  class: classes;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  iconBrawl: string;

  // attack_id: UUID;

  // super_id: UUID;

  // hypercharge_id: UUID;
}
