/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  var x = num % 9;
  if (!x) return 9;
  return x;
};
