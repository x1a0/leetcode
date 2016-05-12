/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sums = [];
  var addUp = function(n) {
    var digits = n.toString().split('');
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      var num = parseInt(digits[i]);
      sum += num * num;
    }

    if (sum === 1) {
      return true;
    }

    if (sums.indexOf(sum) > -1) {
      return false;
    }

    sums.push(sum);

    return addUp(sum);
  };

  return addUp(n);
};
