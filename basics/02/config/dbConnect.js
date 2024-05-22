//mongoose: nodejs에서 mongodb 사용 도와주는 모듈
const mongoose=require("mongoose");
//dotenv 모듈(env 가져올 수 있게 해주는 모듈) 가져와서 config 함수 실행
require("dotenv").config();

//데이터베이스 접속
//데이터베이스 접속해서 무언가를 하기 위해 비동기 처리(async, await)
const dbConnect=async()=>{
  try {
    //db 접속: connect(db 연결 주소=커넥션 스트링)
    //env 파일에서 가져와라
    const connect=await mongoose.connect(process.env.DB_CONNECT);//await: 시간 걸리더라도 일단 이 문장 실행 후 뒷문장 실행해라
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
}

//내보내기
module.exports=dbConnect;