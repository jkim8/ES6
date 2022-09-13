//제너레이터
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);

//multiple.return(); //리턴 하는 순간 제너레이터가 끝나게 된다
multiple.throw('Error!');
next = multiple.next();
console.log(next.value, next.done);
