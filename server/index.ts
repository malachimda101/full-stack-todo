import express, { Express, Request, Response } from 'express';
import path from 'path';
import { apiRouter } from './src/routes/routes';
import config from './src/configs/config';

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
