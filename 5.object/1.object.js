//Object literal {key: value}
// new Object()
//Object.create()

let apple = {
  neme: 'apple',
  'hello-bye': 'π',
  0: 1,
  ['hello']: 'π',
};

console.log(apple['hello-bye']); //νΉμλ¬Έμλ₯Ό μ΄ κ²½μ° λκ΄νΈ νκΈ°λ²μΌλ‘ λ°λ

//μμ± μΆκ°
apple.emoji = 'π';

console.log(apple.emoji);
console.log(apple['emoji']);

//μμ± μ­μ 
delete apple.emoji;
console.log(apple);
