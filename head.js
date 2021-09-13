const head = function(array) {
  return array[0];
}

const assertEqual = function(actual, expected) {
  let evaluate;
  actual === expected ? evaluate = "Passed ✅" : evaluate = "Failed 🔴";
  console.log(`Assertion ${evaluate}: ${actual} === ${expected}`);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([,]));