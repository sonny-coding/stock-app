import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

console.log(process.env.GREETING);

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (_, res) => {
  res.send("hello from stock server");
});
app.get("/hello", async (_, res) => {
  res.status(200).send({ message: process.env.GREETING });
});

const startServer = async () => {
  try {
    app.listen(8000, () => {
      console.log("Server has started on port http://localhost:8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
