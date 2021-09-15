const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed🔴: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inStr) {
  const outObj = {};

  for (let i = 0; i < inStr.length; i++) {
    if (inStr[i] === " ") {
    } else {
      if (outObj[inStr[i]]) {
        outObj[inStr[i]]++;
      } else {
        outObj[inStr[i]] = 1; // init
      }
    }
  }  

  return outObj;
}

// test

console.log(countLetters("lighthouse in the house"));