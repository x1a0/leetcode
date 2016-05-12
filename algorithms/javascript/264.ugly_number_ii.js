/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var buffer = [];
  var i = 1;
  var x = 1;
  while (i < n) {
    insert(x*2, buffer);
    insert(x*3, buffer);
    insert(x*5, buffer);
    x = buffer.shift();
    i++;
  }
  return x;
}

var insert = function(x, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === x) return;
    if (arr[i] > x) break;
  }
  arr.splice(i, 0, x);
}
