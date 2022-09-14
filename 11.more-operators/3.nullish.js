// Nullish coalescing Operator
//ES 11 2022년
//?? null, undefined

// || false 한 경우 설정 0, -0, ""

let num = 0;
console.log(num || '-1'); //0 은 false로 간주해서 || 연산자가 처리함
console.log(num ?? '-1'); // num의 값을 0이지만 false로 간주 안함null, undefined 경우만 됨
