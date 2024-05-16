// const user='Nana';

// const welcome=(name)=>{
//   console.log(`Welcome ${name}!`);
// };

// welcome(user);

// 위 코드를 user.js, welcome.js 두 개의 모듈로
//require(모듈 위치): 모듈 가져오기
const {user1, user3}=require("./5_user");
const welcome=require("./5_welcome");

welcome(user1);
welcome(user3);