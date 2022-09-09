//불변성

function display(num) {
  num = 5; //변경하는 거 좋지 않음
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

//함수 내부에서 외부터 부터 주어진 인자의 값을 변경하는 것은 좋지 않음
//상태 변경이 필요한 경우에는, 새로운 상태를 만들어서 반환해야 함

function displayObj(obj) {
  obj.name = 'bob';
  console.log(obj);
}

const juno = { name: 'Juno' };
displayObj(juno);
console.log(juno);

//바꾸고 싶을 때

function changeName(obj) {
  return { ...obj, name: 'bob' };
}
