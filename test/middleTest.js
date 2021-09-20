const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4 ,5]), [3]);
  });
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4 ,5, 6, 7, 8]), [4, 5]); 
  });
  it("returns ['t'] for 'gestern'.split('')", () => {
    assert.deepEqual(middle("gestern".split("")), ["t"]); 
  });
  it("returns ['a', 'n'] for 'pflanzen'.split('')", () => {
    assert.deepEqual(middle("pflanzen".split("")), ["a", "n"]); 
  });
});