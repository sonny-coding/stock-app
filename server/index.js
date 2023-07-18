import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connect from "./mongodb/connect.js";
import axios from "axios";

dotenv.config();

console.log(process.env.GREETING);

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (_, res) => {
  res.send("hello from stock server");
});
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/api/stock", async (req, res) => {
  const { ticker } = req.query;
  const options = {
    url: "https://yh-finance8.p.rapidapi.com/stock/get_financial_stmts",
    params: {
      symbol: ticker.toUpperCase(),
      frequency: "annual",
      statement_type: "income",
      region: "US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.XRapidAPIKey,
      "X-RapidAPI-Host": "yh-finance8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.status(500).send(error);
  }
});

const startServer = async () => {
  try {
    connect(process.env.MONGO_URL);
    app.listen(8000, () => {
      console.log("Server has started on port http://localhost:8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
