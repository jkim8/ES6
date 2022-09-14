// 옵셔널 체이닝 연산자 Optional chaning operator
//ES11 2020년에
//?. 이렇게 생김

let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

let obj = { name: 'dog', owner: { name: 'juno' } };
// const ownerName = obj && obj.owner && obj.owner.name;
const ownerName = obj?.owner?.name;
console.log(ownerName);
