/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var steps = m + n - 2;
  return factorial(steps, m) / factorial(n - 1, 1);
};

var factorial = function(x, to) {
  if (x < to) return 1;
  if (x === to) return to;
  return x * factorial(x - 1, to);
}
