const add = function(x, y) {
  return x + y;	
};

const subtract = function(x, y) {
  return x - y;	
};

const sum = function(array) {
  return array.reduce((sum, value) => sum + value, 0)
};

const multiply = function(array) {
  return array.reduce((product, value) => product * value, 1)
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
