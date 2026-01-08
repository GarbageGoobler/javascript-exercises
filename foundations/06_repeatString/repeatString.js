const repeatString = function(str, numRepeat) {
  if (numRepeat < 0) return 'ERROR';
  let accumulatedStr = "";
  for (let i = 0; i < numRepeat; i++) {
    accumulatedStr = accumulatedStr + str;
  }
  return accumulatedStr;
};

// Do not edit below this line
module.exports = repeatString;
