// 주어진 숫자만큼 0 부터 순회하는 함수
// 순화하면서 주어딘 트정한 일을 수행해야 함
// 순회하는 숫자를 다 출력하고 싶음
//순회하는 숫자의 두배값을 다 출력하고 싶음

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleLog(num) {
  console.log(num * 2);
}

iterate(3, log);
iterate(3, doubleLog);

setTimeout(() => {
  console.log('하이');
}, 3000);
