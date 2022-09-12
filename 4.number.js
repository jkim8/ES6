const num1 = 123;
const num2 = new Number(123);

console.log(typeof num1); //number
console.log(typeof num2); //object

console.log(Number.MAX_VALUE);

if (num1 === Number.NaN) {
  console.log('숫자가 아님');
}
if (num1 === Number.MAX_VALUE) {
  console.log('숫자가 아님');
}
if (num1 === Number.isNaN(num1)) {
  console.log('숫자가 아님');
}

//지수표기법 (매우 크거나 작은 숫자를 표기할때 사용 , 10의n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2 로 나오는데 e+2는 10의 2승을 말함

//반올림 하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수 까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(3)); //전체 자릿수 표기가 안될때는 지수 표기법으로 반환됨

console.log(Number.EPSILON); //0과 1 사이에서 나타낼 수 있는 가장 작은 숫자

const num = 0.1 + 0.2 - 0.2;

console.log(num); //0.10000000000000003   10진수를 2진수를 바꿔서 계산한다음 다시 10진수로 바꿈

function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //false
