const express = require("express");
const app = express();
const port = 3000;

app.post("/api/v1/endpoint", (req, res) => {
  console.log("res", res);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
