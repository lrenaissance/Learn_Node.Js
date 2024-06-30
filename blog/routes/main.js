const express = require("express");
const router=express.Router();
const mainLayout="../views/layouts/main.ejs";
const Post=require("../models/Post"); //Post 모델 가져오기
const asyncHandler=require("express-async-handler"); //비동기 처리 위해 가져오기

router.get(["/","/home"], asyncHandler(async(req, res) => { //root나 home일 때 
  const locals={
    title: "Home"
  }
  const data=await Post.find(); //db의 Post라는 컬렉션에 들어있는 모든 게시물 가져오기
  res.render("index",{locals: locals, data, layout: mainLayout});
}));

router.get("/about", (req, res) => {
  const locals={
    title: "About"
  }
  res.render("about",{locals, layout: mainLayout});
});

/*게시물 상세 보기
  GET /post/:id
*/
router.get(
  "/post/:id", //post 경로로 id 넘겨주면
  asyncHandler(async(req,res)=>{ //db에서 해당 id 값 찾아서 넘겨주기
    const data=await Post.findOne({_id:req.params.id});
    res.render("post",{data,layout:mainLayout});
  })
);

module.exports=router;

// Post.insertMany([ //db에 넣고 난 후에는 주석 처리(아니면 저장할 때마다 db에 임시 데이터가 들어감)
//   {
//     title: "Title1",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nunc ipsum. Praesent lobortis risus elementum enim convallis semper. Etiam feugiat lorem id orci rhoncus, non auctor ex tincidunt."
//   },
//   {
//     title: "Title2",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu."
//   },
//   {
//     title: "Title3",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed congue lorem, nec ultricies mi. Aliquam at tortor sit amet."
//   },
//   {
//     title: "Title4",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel justo eu metus congue venenatis."
//   },
//   {
//     title: "Title5",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultricies dui. Morbi sit amet nulla pharetra, posuere sapien sed, molestie urna. Sed scelerisque at."
//   }
// ]);//여러 게시물(배열) 넣을 것임