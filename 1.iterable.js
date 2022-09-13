const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

// 오브젝트는 iterable이 아니다
// const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   console.log(item);
// }

//Iteravble 하다는 건 순회가 가능하다는 거지
//[Symbol.iterator](): Iterator를 리턴한다는 것은 순회가는한 객체이다라는것을 알수 있음
//순회가 가능하면 무엇을 할 수 있나 ? for...of, spread

// 오브젝트는 for in 은 사용 가능
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // key 를 출력
  console.log(item);
}

const iterator = array.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
