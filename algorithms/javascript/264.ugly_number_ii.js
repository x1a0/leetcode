/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var uglies = [1];
  var p2 = 0, p3 = 0, p5 = 0;

  while (uglies.length < n) {
    var next = Math.min(uglies[p2] * 2, uglies[p3] * 3, uglies[p5] * 5);
    if (uglies[p2] * 2 === next) p2++;
    if (uglies[p3] * 3 === next) p3++;
    if (uglies[p5] * 5 === next) p5++;
    uglies.push(next);
  }

  return uglies[n - 1];
}
