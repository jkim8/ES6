//조건문 conditional statement
//switch
//정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

let day = 10;
let dayname;

switch (day) {
  case 0:
    dayname = '월요일';
    break;
  case 1:
    dayname = '화요일';
    break;
  case 2:
    dayname = '수요일';
    break;
  case 3:
    dayname = '목요일';
    break;
  case 4:
    dayname = '금요일';
    break;
  case 5:
    dayname = '토요일';
    break;
  case 6:
    dayname = '일요일';
    break;
  default:
    console.log('해당 요일 없음');
}

console.log(dayname);

//break 사용 안하는 경우
let condition = 'okay';
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
}

console.log(text);
