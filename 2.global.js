console.log(globalThis);
console.log(Infinity);
console.log(this); //전역 객체를 가리킴

eval('const num = 2; console.log(num) ');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.34'));
console.log(parseInt('12,34'));

//URL
//아스키 문자로만 구성되어야 함
//한글 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://선태양.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 component를 이용
const part = '주노.com';
console.log(encodeURIComponent(part));
