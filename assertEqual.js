const assertEqual = function(actual, expected) {
  let evaluate;
  actual === expected ? evaluate = "Passed ✅" : evaluate = "Failed 🔴";
  console.log(`Assertion ${evaluate}: ${actual} === ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);