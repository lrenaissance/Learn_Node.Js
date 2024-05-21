const http=require("http");

//서버 만들기
//req: 요청 res: 응답
const server=http.createServer((req,res)=>{
  console.log("요청 발생"); //localhost:3000
  console.log("req");

  // 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료
  //setHeader: 콘텐츠 타입 지정
  res.setHeader("Content-type","text/plain");
  res.write("Hello Node"); //write: 화면 표시
  res.end(); //end: 응답이 끝이 났다
});

//서버 실행(포트번호 지정)
server.listen(3000,()=>{
  console.log("server is running");
});