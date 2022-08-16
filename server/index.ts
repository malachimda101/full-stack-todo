import express, { Express, Request, Response } from 'express';
import path from 'path';
import { apiRouter } from './src/routes/routes';
import config from './src/configs/config';
import dbConfig from './src/configs/db.config';

dbConfig
  .initialize()
  .then(() => {
    console.log(
      `Database connection initialized. You are now connected to database '${config.DB_NAME}' as '${config.DB_USER}' on host '${config.DB_HOST}'`
    );
  })
  .catch((err) => {
    console.error('Error during database initialization:', err);
  });

const app: Express = express();

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.use(express.json());

app.use('/api', apiRouter);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(config.PORT, () => {
  console.log(`⚡️[server]: Server running at http://localhost:${config.PORT}`);
});
