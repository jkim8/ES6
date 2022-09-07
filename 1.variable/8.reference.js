// 원시값은 값이 복사되어 전달 됨
let a = 1;
let b = a;
b = 2;
console.log(a); //1
console.log(b); //2

// 객체타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};

let orange = apple; //주소가 복사된것임

orange.name = '오렌지';
console.log(apple);
