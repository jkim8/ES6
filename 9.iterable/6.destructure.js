// 구조 분해 할당 destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍌', '🍎', '🍇', '🍑'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const juno = { name: 'juno', age: 20, job: 'developer' };

// function display(preson) {
//   console.log('이름', preson.name);
//   console.log('나이', preson.age);
//   console.log('직업', preson.job);
// }

function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}

display(juno);

const { name, age, job: occupation, pet = '강아지' } = juno;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz

const prop = {
  name: 'Button',

  styles: {
    size: 20,

    color: 'black',
  },
};

function changeColor({ styles: { size, color } }) {
  console.log(color);
  console.log(size);
}

changeColor(prop);
