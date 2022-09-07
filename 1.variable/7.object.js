//복합 데이터
//객체는 heap에 할당 되어짐 원시타입은 data와 stack에
//객체는 메로리 주소를 보관하고 있음 즉 참조값을 가지고 있음
// copy by refetence

let neme = 'apple';
let color = 'red';
let display = '🍎';

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
console.log(apple.display);
