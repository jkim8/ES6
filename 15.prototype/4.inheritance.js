//프로토타입을 베이스로 한 객체지향 프로그래밍

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  Animal.call(this, name, emoji); //super() 와 같은 기능
  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자');
};

const dog1 = new Dog('멍멍이', '🐶', '주노');

dog1.play();
dog1.printName();

const tiger1 = new Tiger('어흥', '🐯');
console.log(tiger1);
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);

console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
