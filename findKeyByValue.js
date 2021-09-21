const findKeyByValue = function(obj, askValue) {
  for (let key in obj) if (askValue === obj[key]) return key;
};

module.exports = findKeyByValue;
