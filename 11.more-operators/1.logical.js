//논리 연산자 Logical Operator
//&& 그라고
// || 또는
//단축평가 : Short-circuit evauation

const obj1 = { name: 'dog' };
const obj2 = { name: 'cat', owner: 'juno' };

if (obj1 && obj2) {
  console.log('둘다 true');
}

if (obj1 || obj2) {
  console.log('하나라도 true라면');
}

let result = obj1 && obj2; //obj2가 result에 할당 됨
console.log(result);

result = obj1 || obj2; //앞에 것 obj1 이 result에 할당 됨
console.log(result);

//활용 예제
// && 조건이 true일때 무언가를 해야 할 경우
// || 조건이 false일때 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined 인 경우를 확인 할 때
let item; // = { price: 1 };
const price = item && item.price; //item이 값이 있으면 item.price 출력 없으묜 undefined
console.log(price);

//기본값을 설정
function print(message) {
  const text = message || 'hello'; //메세지가 없으면 hello를 출력
  console.log(text);
}
print();
// || 값이 false 인 경우 설정: 0,-0, sull, undefined
