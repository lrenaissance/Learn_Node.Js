// js는 빨리 처리할 수 있는 작업 후 시간이 걸리는 작업은 나중에 처리(thread 하나, 동시작업 안 됨)

//비동기 처리: a 작업 다음에 표시하는 b 작업을 처리하라고 코딩하는 것. 함수들의 연결 순서 지정

// 순서대로 실행하기  
function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(()=>{
    console.log('B');
    callback();//B 출력 후 콜백 함수 실행
  },2000);//2초 뒤에 화면에 B를 출력
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);//B 다음에 C해 연결해주기
//displayC: 콜백 함수
//displayC(); -> 이렇게 하면 A C B순으로 출력