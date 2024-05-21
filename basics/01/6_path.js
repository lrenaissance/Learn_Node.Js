//path 모듈 가져오기
const path=require("path");

//join
const fullPath=path.join('some','work','ex.txt'); //결과: some\work\ex.txt

console.log(fullPath);

//dirname:경로만 추출
const dir=path.dirname(fullPath);
console.log(dir); //결과: some\work

//basename: 파일명만 추출
//__filename: 현재 파일의 전체 경로
const fn1=path.basename(__filename);
console.log(fn1); //결과: 6_path.js

//확장자 제외하고 파일명만 추출
const fn2=path.basename(__filename,'.js');
console.log(fn2); //결과: 6_path