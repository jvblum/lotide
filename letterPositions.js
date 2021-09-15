const eqArrays = function(array1, array2) {
  let mismatch;
  for (let i = 0; i <= array1.length; i++) { // "<=" for cases when array1[i] is equal to array2[i] within array1.length, but array1.length !== array2.length
    if (array1[i] !== array2[i]) {
      // console.log("mismatch!", array1[i], "?==", array2[i]);
      mismatch = true;
      break;
    }
  }
  return mismatch ? false : true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed✅`);
  } else {
    console.log(`Assertion Failed🔴`);
  }
};

const letterPositions = function(inStr) {
  const outObj = {};

  for (let i = 0; i < inStr.length; i++) {
    if (inStr[i] === " ") {
    } else {
      if (!outObj[inStr[i]]) {
        outObj[inStr[i]] = []
      }
      outObj[inStr[i]].push(i);
    }
  }  

  return outObj;
};

console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
