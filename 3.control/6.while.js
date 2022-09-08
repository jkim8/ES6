// while(조건) {}
//조건이 false가 될때까지 {}코드를 반복 실행

let num = 5;

while (num >= 0) {
  console.log(num);
  num--;
}

let isActivate = true;

let i = 0;

while (isActivate) {
  console.log('아직 살아있다');
  if (i === 3) {
  }
  i++;
}

do {
  //무조건 한번 실행하고 나서 조건을 검사한다
  console.log('do-while 살아있음');
} while (isActivate);
