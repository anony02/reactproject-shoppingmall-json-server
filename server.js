const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const router = jsonServer.router("db.json"); // JSON Server가 사용하는 데이터 파일

// CORS 미들웨어 추가
app.use(
  cors({
    origin: "https://reactproject-shoppingmall-git-deploy-anony02s-projects.vercel.app", // 허용할 출처
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// JSON Server 미들웨어 추가
app.use("/api", router);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
