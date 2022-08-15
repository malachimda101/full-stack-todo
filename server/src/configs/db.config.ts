import { DataSource } from 'typeorm';
import config from './config';

const dbConfig = new DataSource({
  type: 'mysql',
  host: config.DB_HOST,
  port: parseInt(config.DB_PORT || '3306'),
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  logging: false,
  synchronize: true
});

export default dbConfig;
