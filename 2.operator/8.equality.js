// 동등 비교 관계 연산자  (Equality operator)

//== 값이 같음
//!= 값이 다름
//=== 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log(true == 1); //true
console.log(true === 1); //false

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false  할당된 메모리 주소가 달라서
console.log(obj1.name == obj2.name); //true 문자열이 같음으로 타입도 같음

let obj3 = obj2;

console.log(obj3 == obj2); //true 동일한 메모리 주소를 갖고 있어서
console.log(obj3 === obj2); //true 동일한 메모리 주소를 갖고 있어서
