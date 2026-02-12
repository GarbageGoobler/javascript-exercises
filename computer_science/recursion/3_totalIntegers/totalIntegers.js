const totalIntegers = function (data, topLevel = true) {
  // break out if top level is not array or object
  if (topLevel && !Array.isArray(data) && typeof data !== "object")
    return undefined;

  if (Number.isInteger(data)) return 1;
  if (Array.isArray(data)) {
    return data.reduce((count, item) => count + totalIntegers(item, false), 0);
  }
  if (data !== null && typeof data === "object") {
    return Object.values(data).reduce(
      (count, value) => count + totalIntegers(value, false),
      0,
    );
  }
  return 0;
};

// Do not edit below this line
module.exports = totalIntegers;
