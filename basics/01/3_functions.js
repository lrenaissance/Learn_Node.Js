//함수 선언. 호출

//함수 선언 방법1
function greetings1(name){
  console.log(`Hello, ${name}.`);
}

//함수 선언 방법2: 함수 표현식
//함수 이름이 변수처럼 바뀔 수 있음
let greetings2=function(name){
  console.log(`Hi, ${name}!`);
}

//함수 호출
greetings1('Apple');
greetings2('Tomato');

//함수 선언 방법3:즉시 실행 함수(선언+실행)
(function(a,b){
  console.log(`Today is ${a}/${b}`)
}(5,17)) //(5,17)이 a와 b에 들어가는 값


//함수
// let bye=function(){
//   return "Bye";
// };

//화살표 함수
//(매개변수)=>{함수 처리 내용}
//함수 처리 내용이 한 줄+return 포함 -> return 생략 가능
let bye=()=>{'bye'};
console.log(bye());

//함수2
// let sum=function(a,b){
//   return a+b;
// }

//화살표 함수
let sum=(a,b)=>{a+b};
console.log(sum(76,2));