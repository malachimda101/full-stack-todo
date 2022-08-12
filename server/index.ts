import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();

console.log(path.resolve(__dirname, '/client/build'));

app.use(express.static(path.resolve(__dirname, '../../client/build')));


app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))
})

app.listen(8000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${8000}`);
});