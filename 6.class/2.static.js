//static 정적 프로퍼티, 메소드

class Fruit {
  static MAX_FRUIT = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //클래스 레벨의 메서드
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조 할 수 없음
    return new Fruit('banana', '🍌');
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

//사용 예제
Math.pow();
Number.isFinite(1);
