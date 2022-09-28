const dog = { name: '멍멍이', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨

const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
const descriptor = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(descriptor);

Object.defineProperty(dog, 'name', {
  value: '왈왈',
  writable: false, // 값 수정 안됨
  enumerable: false, //열거 안됨
  configurable: false, // 키 수정 안됨
});
console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name; //안됨
console.log(dog.name);
