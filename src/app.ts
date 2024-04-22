import cors from "cors";
import express, { Request, Response } from "express";
import router from "./app/route";
const app = express();

app.use(cors({ origin: "https://sweet-home-client.vercel.app" }));
// app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/v1", router);

const response = "Welcome to sweet home!";

app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

export default app;
