//Object literal {key: value}
// new Object()
//Object.create()

let apple = {
  neme: 'apple',
  'hello-bye': '👍',
  0: 1,
  ['hello']: '👉',
};

console.log(apple['hello-bye']); //특수문자를 쓴 경우 대괄호 표기법으로 바뀜

//속성 추가
apple.emoji = '🍎';

console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제
delete apple.emoji;
console.log(apple);
