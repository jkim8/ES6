//Spread 연산자
//모든 Iterable은 Spread 될 수 있다
//순회가 가능한 모든 것들을 촤르르 펼칠 수 있다

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

//Array Concat
const fruits1 = ['🍇', '🍑'];
const fruits2 = ['🍌', '🍎'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2];
console.log(arr);

//object
const juno = { name: 'juno', age: 20 };
const updated = {
  ...juno,
  job: 'developer',
};

console.log(updated);
