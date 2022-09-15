function fecthEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

// fecthEgg('치킨') //
//   .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fry`);
}

function getChicken() {
  return Promise.resolve(`1 => 2`);
}

getChicken()
  .then((chicken) => {
    return fecthEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg))
  .catch((error) => console.log(error.name));
