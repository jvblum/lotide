const tail = function(array) {
  return array.slice(1);
};

//

const assertEqual = function(actual, expected) {
  let evaluate;
  actual === expected ? evaluate = "Passed ✅" : evaluate = "Failed 🔴";
  console.log(`Assertion ${evaluate}: ${actual} === ${expected}`);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

