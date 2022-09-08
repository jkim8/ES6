// 퀴즈

let num = 2;

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('❌');
}

num % 2 === 0 ? console.log('👍') : console.log('❌');

let emoji = num % 2 === 0 ? '👍' : '❌';
console.log(emoji);
