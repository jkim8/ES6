let a = 2;
let b = 3;

let result = a + b * 4; //우선순위가 곱하기임
console.log(result); // 14

result = a++ + b * 4;
console.log(result);
//코드 상에서 ()로 우선순위를 매기면 된다
