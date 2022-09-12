//객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. class 클래스

class Fruit {
  //생성자 : new 키워드로 객체를 생성 할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//apple 은 Fruit 클래스의 인스턴스 이다 .
const apple = new Fruit('apple', '🍎');
//orange는 Fruit 클래스의 인스턴스 이다 .
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(apple.name);
console.log(orange);

apple.display();
