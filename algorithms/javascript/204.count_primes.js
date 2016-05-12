/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;
  if (n <= 3) return 1;
  if (n <= 5) return 2;
  if (n <= 7) return 3;
  if (n <= 11) return 4;

  var count = 4; // 2,3,5,7
  for (var i = 11; i < n; i += 2) {
    if (isPrime(i)) count++;
  }
  return count;
};

var isPrime = function(x) {

  if (x % 2 === 0 || x % 3 === 0 || x % 5 === 0 || x % 7 === 0) {
    return false;
  }

  for (var i = 11; i * i <= x; i += 2) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}
