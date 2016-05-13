/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var uglies = [1];

  var ps = [];
  for (var i = 0; i < primes.length; i++) {
    ps[i] = 0;
  }

  while (uglies.length < n) {
    var next = 0;
    for (var j = 0; j < primes.length; j++) {
      var _next = uglies[ps[j]] * primes[j];
      if (!next || _next < next) {
        next = _next;
      }
    }

    for (j = 0; j < primes.length; j++) {
      if (uglies[ps[j]] * primes[j] === next) ps[j]++;
    }

    uglies.push(next);
  }

  return uglies[n - 1];
};
