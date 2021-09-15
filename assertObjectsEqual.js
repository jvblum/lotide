const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed🔴: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false
  }

  if (!eqArrays(objKeys1.sort(), objKeys2.sort())) {
    return false
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
        return false
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed🔴: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
