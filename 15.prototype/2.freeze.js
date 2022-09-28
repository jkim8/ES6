// 동결! Object.freeze  추가❌ 삭제❌ 쓰기❌ 속정 재정의❌
//(단 얕은 꽁꽁 얼림이 된다)
const juno = { name: '주노' };
const dog = { name: '와우', emoji: '🐶', owner: juno };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

juno.name = '추노';
console.log(dog);

//밀봉! Object.seal 값의 수정👌, 추가❌, 삭제 ❌, 재정의❌
const cat = {}; // ...dog와 비슷
Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '나용';
console.log(cat);
delete cat.emoji;
console.log(cat);

//동결인지 밀봉인지 확인하는 함수
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//확장 금지 preventExtension  추가만 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응'; //변경 가능
console.log(tiger);
delete tiger.name; //삭제 가능
console.log(tiger);
tiger.age = 1; //추가 안됨
console.log(tiger);
