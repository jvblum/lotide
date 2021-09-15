const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed🔴: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inObj, askValue) {
  let findKey;
  
  for (let key in inObj) {
    if (askValue === inObj[key]) {
      findKey = key;
    }
  }

  return findKey;
};

// test

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
