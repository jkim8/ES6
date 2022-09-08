//반복문 Loof Statement

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

//무한 루프를 조심해야 한다.

//반복문 제어: continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('i가 10이 됨');

    break;
  }
  console.log(i);
}
