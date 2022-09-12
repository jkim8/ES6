//UTC 기준 협정 세계시
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.now('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); //0이 1월임
console.log(now.getFullYear());
console.log(now.getDate()); //0이 1월임
console.log(now.getDay()); //0이 일요일  1... 6 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); //ISO 8601 형식
console.log(now.toLocaleString('en-US')); //미국 형식
console.log(now.toLocaleString('ko-KR')); //한국 형식
