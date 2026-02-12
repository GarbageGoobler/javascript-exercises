const contains = function (object, target) {
  if (Object.is(object, target)) return true;
  if (object === null || typeof object !== "object") {
    return false;
  }
  for (const value of Object.values(object)) {
    if (contains(value, target)) return true;
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
