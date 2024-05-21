//파일 시스템 모듈 가져오기
const fs=require("fs");

//readdor: 비동기. 경로, callback 사용
fs.readdir("./",(err,files)=>{
  if(err){//에러나면
    console.log(err);
  }
  console.log(files);
});

//file 읽기
//encoding 방식:utf8 (없으면 메모리에서 그대로 바이너리 형태로 가져옴)
fs.readFile("./7_example.txt","utf8",(err,data)=>{
  if(err){
    console.log(err);
  }
  //console.log(data);
  
  //file 쓰기
  fs.writeFile("./7_test.txt",data,(err)=>{
    if(err){
      console.log(err);
    }
    console.log('./7_test.txt is saved.');
  });
});
