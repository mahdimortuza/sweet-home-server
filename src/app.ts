import cors from "cors";
import express, { Request, Response } from "express";
import router from "./app/route";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

const response = "Welcome to sweet home!";

app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

export default app;
