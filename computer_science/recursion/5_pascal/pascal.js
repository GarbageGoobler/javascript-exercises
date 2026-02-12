const pascal = function (n) {
  if (n === 1) {
    return [1];
  }
  if (n > 1) {
    const rowBefore = pascal(n - 1);
    rowBefore.unshift(0); // add zero as first element
    // a[n+1] is undefined so gives zero
    const thisRow = rowBefore.map((num, i, a) => num + (a[i + 1] ?? 0));
    return thisRow;
  }
};

// Do not edit below this line
module.exports = pascal;
