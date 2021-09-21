const countOnly = function (allItems, itemsToCount) {
  const countThese = []
  const outObj = {}
  for (let keys in itemsToCount) if (itemsToCount[keys] === true) countThese.push(keys);
  for (let item of allItems) if (countThese.includes(item)) outObj[item] ? outObj[item]++ : outObj[item] = 1;
  return outObj;
};

module.exports = countOnly;