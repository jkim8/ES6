//카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 증가 할수 있는 카운터를 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);

counter.increment();

console.log(counter.value);

counter.increment();

console.log(counter.value);
