import cors from "cors";
import express, { Request, Response } from "express";
const app = express();

app.use(cors());
app.use(express.json());

const response = "Welcome to sweet home!";

app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

export default app;
