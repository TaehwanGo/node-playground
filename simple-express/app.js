const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.post("/api/v1/upload", (req, res) => {
  console.log("res", res);
  console.log("gotcha");
  // console.log("res.body", res.body); // formData는 res.body에서 확인이 안됨
  res.send("Hello World!");
});

app.post("/api/v1/memo", (req, res) => {
  console.log("res.body", res.body);
  console.log("memo");
  res.send("memo!");
});

app.get("/api/v1/memo", (req, res) => {
  console.log("get memo");
  res.json("It is a memo");
});

app.post("/api/v1/test", (req, res) => {
  console.log("res.body", res.body);
  res.send("Hello World! /api/v1/test");
});

app.get("/api/v1/test", (req, res) => {
  res.send("Hello World! /api/v1/test");
});

app.get("/", (req, res) => {
  res.send("Hello World! /");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
