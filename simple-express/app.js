const express = require("express");
const app = express();
const port = 4000;

app.post("/api/v1/upload", (req, res) => {
  console.log("res", res);
  // console.log("res.body", res.body); // formData는 res.body에서 확인이 안됨
  res.send("Hello World!");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
