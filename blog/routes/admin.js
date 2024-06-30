const express=require("express");
const router=express.Router();
const adminLayout="../views/layouts/admin"; //관리자 layout 가져오기
const adminLayout2="../views/layouts/admin-nologout"; //로그아웃x
const asyncHandler=require("express-async-handler");//비동기 처리
const User=require("../models/User"); //유저 모델 가져오기
const Post=require("../models/Post");
const bcrypt=require("bcrypt"); //암호화
const jwt=require("jsonwebtoken");
const jwtSecret=process.env.JWT_SECRET;

/*Check login*/
const checkLogin=(req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    res.redirect("/admin");
  }
  else{
    try{
      const decoded=jwt.verify(token,jwtSecret);//내가 발행한 토큰인지(관리자인지) 확인
      req.userId=decoded.userId;
      next();//관리자라면 next
    }
    catch(error){
      res.redirect("/admin");
    }
  }
}

/*
  Admin Page
  GET /admin
*/
router.get("/admin",(req,res)=>{
  const locals={
    title: "관리자 페이지"
  }
  res.render("admin/index",{locals, layout:adminLayout2});
});

/*
  Check login
  POST /admin
*/
router.post("/admin",asyncHandler(async(req,res)=>{
  const {username,password}=req.body;
  const user=await User.findOne({username});
  if(!user){
    return res.status(401).json({message: "일치하는 사용자가 없습니다."});
  }
  const isValidPassword=await bcrypt.compare(password,user.password);
  if(!isValidPassword){
    return res.status(401).json({message:"비밀번호가 일치하지 않습니다."});
  }

  //토큰 발행
  const token=jwt.sign({id: use._id},jwtSecret);
  res.cookie("token",token,{httpOnly:true});
  res.redirect("/allPosts");
}));


/*
  View Regsiter form
  GET /register
*/
router.get("/register",asyncHandler(async(req,res)=>{
  res.render("admin/index",{layout:adminLayout2});
}));

/*
  Regsiter Administrator
  POST /register
*/
router.post("/register",asyncHandler(async(req,res)=>{
  const hashedPassword=await bcrypt.hash(req.body.password,10);
  const user=await User.create({ //db에 새로운 사용자 추가
    username: req.body.username,
    password: hashedPassword
  });
  //res.json(`user created: ${user}`);
}));

/*
  get all posts
  GET /allPosts
*/

//checkLogin이 먼저 실행되고, 통과될 경우 next로 이어서 실행
router.get("/allPosts",checkLogin,asyncHandler(async(req,res)=>{
  const locals={
    title: "Posts"
  }
  const data=await Post.find();
  res.render("admin/allPosts",{locals,data,layout:adminLayout});
}));

/*
  Admin logout
  GET /logout
*/
router.get("/logout",(req,res)=>{
  res.clearCookie("token"); //토큰 정보 삭제
  res.redirect("/");
})

/*
  Admin add post
  GET /add
*/
router.get("/add", checkLogin, asyncHandler(async(req,res)=>{
  const locals={
    title: "게시물 작성"
  }
  res.render("admin/add",{locals, layout:adminLayout});
}));
/*
  Admin add post
  POST /add
*/
router.post("/register",asyncHandler(async(req,res)=>{
  const {title, body}=req.body;
  const newPost=new Post({
    title:title,
    body:body,
  });

  await Post.create(newPost); //post에 추가
  res.redirect("/allPosts");
}));

/*
  Admin edit post
  GET /edit/:id
*/
router.get("/edit/:id",checkLogin,asyncHandler(async(req,res)=>{
  const locals={title:"게시물 편집"};
  const data=await Post.findOne({_id:req.params.id});
  res.render("admin/edit",{locals,data,layout:adminLayout}); 
}));

/*
  Admin edit post
  PUT /edit/:id
*/
router.put("/edit/:id",checkLogin,asyncHandler(async(req,res)=>{
  await Post.findByIdAndUpdate(req.params.id,{
    title: req.body.title,
    body: req.body.body,
    createdAt: Date.now()
  })
  res.redirect("/allPosts");
}));

/*
  Admin delete post
  DELETE /delete/:id  
*/
router.delete("/delete/:id", checkLogin,asyncHandler(async(req,res)=>{
  await Post.deleteOne({_id:req.params.id});
  res.redirect("/allPosts");
}));

module.exports=router;