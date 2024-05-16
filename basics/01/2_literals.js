//문자열과 변수를 연결해 사용할 때
let num1=3;
let num2=5;

//console.log(num1+"과 "+num2+"를 더하면 "+(num1+num2)+"이다"); -> 이렇게 쓰기 불편하다

//템플릿 리터럴으로 해결: 백틱(`)!=작은따옴표(')
//${변수} 
console.log(`${num1}과 ${num2}를 더하면 ${num1+num2}이다`);