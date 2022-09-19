import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
const PORT = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 웹 관련 API

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

app.post("/api/v1/save", (req, res) => {
  console.log("res.body", res.body);
  console.log("save DATA_OBJECT");
  res.json("Save DATA_OBJECT !");
});

app.post("/api/v1/test", (req, res) => {
  console.log("res.body", res.body);
  res.send("Hello World! /api/v1/test");
});

app.get("/api/v1/test", (req, res) => {
  res.send("Hello World! /api/v1/test");
});

// 앱관련 API
app.get("/api/v1/trainings", (req, res) => {
  res.json({
    data: Array(10)
      .fill(0)
      .map((_, i) => {
        const randomNum = Math.floor(Math.random() * 100 + 1);
        return {
          id: nanoid(),
          name: `title ${i}`,
          location: `location ${randomNum}`,
          startedAt: "2020-01-01",
          endedAt: `2020-01-0${Math.floor(Math.random() * 2 + 1)}`,
          total: randomNum,
        };
      }),
    meta: {
      page: 1,
      isLastPage: false,
    },
  });
});

app.post("/api/v1/check-qr-enter-password", (req, res) => {
  const { password, id } = req.body;
  console.log("password", password);
  console.log("id", id);
  if (password === "1234") {
    res.json({
      data: {
        isCorrect: true,
        message: "비밀번호가 일치합니다.",
      },
    });
  } else {
    res.json({
      data: {
        isCorrect: false,
        message: "비밀번호가 일치하지 않습니다.",
      },
    });
  }
});

// test
app.get("/", (req, res) => {
  res.send("Hello World! /");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
