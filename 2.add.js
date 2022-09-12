const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

//추가, 삭제 - 좋지않은 방식
fruits[4] = '🍊';
console.log(fruits);

delete fruits[1];
console.log(fruits); //삭제하고 그 자리가 텅텅 빈걸로 남아 있음
