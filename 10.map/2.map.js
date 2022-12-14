const map = new Map([
  ['key1', 'π'],
  ['key2', 'π'],
]);

console.log(map);

// μ¬μ΄μ¦ νμΈ
console.log(map.size);
//μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1'));
console.log(map.has('key6'));
//μν
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key4'));
//μΆκ°
console.log(map.set('key3', 'β­'));
//μ­μ 
console.log(map.delete('key3', 'β­'));
console.log(map);
//μ λΆ μ­μ 
console.log(map.clear());
console.log(map);
console.clear();
//μ€λΈμ νΈμμ ν° μ°¨μ΄μ ??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

//mapμμ μ¬μ© ν  μ μλ  ν¨μλ€μ΄ μμ
console.log(obj[key]); // { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }
console.log(map2.get(key)); // { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }
