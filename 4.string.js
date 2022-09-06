//문자열 타입

let string = '안녕하세요';
string = `안녕`;
console.log(string);

string = '"안녕"';
console.log(string);

//특수문자 출력하는 법  이스케이프 표현이라고 함
string = '안녕!\n하이\t\t 내이름은\\'; //\n은 줄바꿈 \t는 탭임  \\두번하면 하나 나옴
console.log(string);

//템플릿 리터럴 (Template Literal)`` 띄워쓰기도 쌉가능
let id = '주노';
let greeting = "'안녕!, " + id + "오\n즐거운 하루 보내셈!'"; //이렇게 하면 번거로움
console.log(greeting);

greeting = `'안녕, ${id} 어어
줄거운 하루 보세냄'`;
console.log(greeting);
