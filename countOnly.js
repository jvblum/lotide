const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed🔴: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const countThese = []
  const outObj = {}
  
  for (let keys in itemsToCount) { // check
    if (itemsToCount[keys] === true) {
      countThese.push(keys)
    }
  }

  for (let item of allItems) {
    if (countThese.includes(item)) {
      if (outObj[item]) {
        outObj[item]++;
      } else {
        outObj[item] = 1; // init
      }
    }
  }

  return outObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

const result2 = {}
console.log(result2["Magic"]);