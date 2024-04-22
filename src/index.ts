import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api/to-do-list", (req: Request, res: Response) => {
  const rawToDoList = fs.readFileSync(
    __dirname + "/to-do-list/to-do-list.json"
  );
  const toDoList = JSON.parse(rawToDoList.toString());

  res.status(200).send(toDoList);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
