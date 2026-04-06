import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use("/hi", (req, res) => {
  res.send("Welcome to CTD!");
});

app.listen(port, () => console.log(`Server started running on localhost:${port}`));

export default app;