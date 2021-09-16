const findKey = function(inObj, cbFunc) {
  for (const key in inObj) {
    if (cbFunc(inObj[key])) { // returns first item that meets condition
      return key;
    }
  }
};

// test

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"