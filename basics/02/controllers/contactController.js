//npm i express-async-handler
const asyncHandler=require("express-async-handler");

//모델
//const Contact=require("../models/contactModel");: 에러발생

//get all contacts

//GET /contacts
//방법1
// const getAllContacts=async(req,res)=>{
//   try {
//     res.send("Contacts Page");
//   } catch (error) {
//     res.send(error);
//   }
// };

//방법2
//에러 체크는 모듈(async handler)에게 맡기기
const getAllContacts=asyncHandler(async(req,res)=>{
  res.send("Contacts Page");
});

//POST: create contact
const createContact=asyncHandler(async(req,res)=>{
  console.log(req.body);
  
  //js 구조 분해 할당
  const {name,email,phone}=req.body;
  if(!name||!email||!phone){
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  //입력한 내용을 추가 : 에러 발생
  // const contact=await Contact.create({
  //   name,email,phone
  // });
  // res.send("Create Contacts");
});

//Get contact
//GET /contacts/:id
const getContact=asyncHandler(async (req,res)=>{
  res.send(`View Contact for ID : ${req.params.id}`);
});

//Update contact
//PUT /contacts/:id
const updateContact=asyncHandler(async (req,res)=>{
  res.send(`Update Contact for ID: ${req.params.id}`)
});

//delete contact
//DELETE /contacts/:id
const deleteContact=asyncHandler(async (req,res)=>{
  res.send(`Delete Contact for ID: ${req.params.id}`);
});

//여러개 내보내기(중괄호)
module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};