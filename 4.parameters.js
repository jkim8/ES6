// 매개변수의 기본값은 무조건 undefined 다
// 아무것도 전달하지 않으면 undefined 다

//아무것도 전달 안할때 default 값으로 정해 줄 수 있다
function add(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add(1, 2, 3);

//Rest 매개변수 Rest Parameters

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7);
