// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// apple.display();

function Fruit(name, emoji) {
  (this.name = name),
    (this.emoji = emoji),
    (this.display = () => {
      console.log(`${this.name}: ${this.emoji}`);
    });
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(apple.name);
console.log(orange);

apple.display();
