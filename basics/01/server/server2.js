//라우팅
const http=require("http");

const server=http.createServer((req,res)=>{
  //console.log("요청 발생"); //localhost:3000
  //console.log("req");

  //req.url: 요청 경로
  //req.method: 요청 방식
  const {url,method}=req; //const url=req.url, const method=req.method: destructing

  res.setHeader("Content-type","text/plain");

  if(method==="GET"&&url==="/home"){
    res.write("HOME");
    res.end();
  }
  else if(method==="GET"&&url==="/about"){
    res.end("ABOUT"); //한줄로 표시할 때 이렇게 사용해도 됨
  }
  else{
    res.end("Not Found");
  }

});

//서버 실행(포트번호 지정)
server.listen(3000,()=>{
  console.log("server is running");
});