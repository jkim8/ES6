// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //super는 부모클래스를 가르킨다.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자');
  }
  eat() {
    super.eat(); //super를 먼저 쓰면 이것이 먼저 나오고 나중것이 나온다
    //오버라이딩 overriding
    console.log('강아지가 먹는다');
  }
}

const dog = new Dog('빨강이', '주노');
console.log(dog);
dog.eat();
dog.play();
