require("dotenv").config({path: "../.env"}); //.env에 있는 변수 가져오기
const express = require("express");
const expressLayouts=require("express-ejs-layouts");
const connectDb=require("../config/db");

const app = express();
const port = process.env.PORT || 3000; //.env에 PORT가 없으면 3000번 포트 사용

const cookieParser=require("cookie-parser");//쿠키파서 가져오기

const methodOverride=require("method-override");

//db 접속
connectDb();

//ejs
app.use(expressLayouts);
app.set("view engine","ejs");
app.set("views","./views");

//public 위치 알려주기
app.use(express.static("../public"));

//파싱용 미들웨어
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser);
app.use(methodOverride("_method"));

//router 등록(일반 사용자)
app.use("/",require("../routes/main"));
//router 등록(관리자)
app.use("/",require("../routes/admin"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});