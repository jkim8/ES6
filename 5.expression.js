// 함수 선언문 function name () {}
// 함수 표현식 const name = function () {}

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

//화살표 함수 const name = () => {}
sum = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

//값만 리턴한다면 괄호와 리턴이 생략 가능하다
sum = (a, b) => a + b;

//생성자 함수도 있다
