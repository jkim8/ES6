const textObj = new String('hello world');
const text = 'Hello world!';

console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'));

console.log(text.includes('ex'));
console.log(text.includes('lo'));

console.log(text.startsWith('o'));
console.log(text.startsWith('h'));
console.log(text.startsWith('H'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); //0부터 2까지
console.log(text.slice(1)); //앞에 부터 잘라 낼 숫자
console.log(text.slice(-1)); //뒤에 부터 잘라 낼 숫자

const space = '                   space         ';
console.log(space.trim());

const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
console.log(longText.split(','));
console.log(longText.split(', '));
