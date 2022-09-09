const obj = {
  name: '주노',
  age: 35,
};

//코딩하는 시점에 정적으로 접급이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'developer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj);
console.log(obj);
