const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

//μΆκ°, μ­μ  - μ’μ§μμ λ°©μ
fruits[4] = 'π';
console.log(fruits);

delete fruits[1];
console.log(fruits); //μ­μ νκ³  κ·Έ μλ¦¬κ° νν λΉκ±Έλ‘ λ¨μ μμ
