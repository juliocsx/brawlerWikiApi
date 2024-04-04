import { Sequelize } from 'sequelize-typescript';
import models from 'src/models';
import * as dotenv from 'dotenv';

dotenv.config();
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
      });
      sequelize.addModels(models);
      await sequelize.sync();
    },
  },
];
