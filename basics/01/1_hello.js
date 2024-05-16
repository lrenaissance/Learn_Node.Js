//파일 실행하기 -> 파일 위치한 폴더로 이동해야함

//npm init -> package.json 파일 생성

//패키지 다운받기: npm i(nstall) {패키지명}
//패키지 삭제: npm uninstall {패키지명}
const c = require("ansi-colors");

function hello(name) {
  console.log("Hello,"+c.cyan(name));
}

hello("Elmo");