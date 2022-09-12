//접근제어자 -캡슐화
//private, public, protected

class Fruit {
  //이것을 field라고 한다
  #name;
  #emoji;
  type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; #field는 외부에서 접근이 불가능함
console.log(apple);
