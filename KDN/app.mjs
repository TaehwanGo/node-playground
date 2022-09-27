import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
const PORT = 4500;

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 커드뉴
app.get("/api/user", (req, res) => {
  res.json({
    id: 123,
    loginId: "kdn123",
    name: "Tony",
    companyId: "company123",
    authorities: ["a", "b", "c"],
    authenticated: true,
  });
});

app.get("/", (req, res) => {
  res.send("Hello World! /");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
