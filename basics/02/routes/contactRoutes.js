const express=require("express");

const app=express();//createServer 안해도 express 실행하면 server 생성됨

//router 인스턴스 생성
const router=express.Router();

//연락처 가져오기
// app.get("/contacts",(req,res)=>{
//   res.send("Contacts Page");
// });

//post,put,delete
//새 연락처 추가
// app.post("/contacts",(req,res)=>{
//   res.send("Create Contacts");
// });

//이 경로에 대해 get, post에 대해 각각 처리(router 사용)
router.route("/contacts").get((req,res)=>{
  res.send("Contacts Page");
}).post((req,res)=>{
  console.log(req.body);
  
  //js 구조 분해 할당
  const {name,email,phone}=req.body;
  if(!name||!email||!phone){
    return res.send("필수 값이 입력되지 않았습니다.");
  }

  res.send("Create Contacts");
});

// //연락처 1개 가져오기
// app.get("/contacts/:id",(req,res)=>{
//   res.send(`View Contact for ID : ${req.params.id}`);
// });

// //연락처 수정하기
// app.put("/contacts/:id",(req,res)=>{
//   res.send(`Update Contact for ID: ${req.params.id}`);
// });

// //연락처 삭제하기
// app.delete("/contacts/:id",(req,res)=>{
//   res.send(`Delete Contact for ID: ${req.params.id}`);
// });

//router 사용
router.route("/contacts/:id").get((req,res)=>{
  res.send(`View Contact for ID : ${req.params.id}`);
}).put((req,res)=>{
  res.send(`Update Contact for ID: ${req.params.id}`);
}).delete((req,res)=>{
  res.send(`Delete Contact for ID: ${req.params.id}`);
});

//모듈로 변경하기
module.exports=router;