const dog = { name: 'λ©λ©μ΄', emoji: 'πΆ' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//μ€λΈμ νΈμ κ°κ°μ νλ‘νΌν°λ νλ‘νΌν° λμ€ν¬λ¦½ν°λΌκ³  νλ κ°μ²΄λ‘ μ μ₯λ¨

const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
const descriptor = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(descriptor);

Object.defineProperty(dog, 'name', {
  value: 'μμ',
  writable: false, // κ° μμ  μλ¨
  enumerable: false, //μ΄κ±° μλ¨
  configurable: false, // ν€ μμ  μλ¨
});
console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name; //μλ¨
console.log(dog.name);
