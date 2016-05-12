/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var results = {};

  var canReach = function(x) {
    if (x === 0) return true;

    if (typeof results[x] !== 'undefined') {
      return results[x];
    }

    var reachableFrom = [];
    for (var i = x - 1; i >= 0; i--) {
      if (nums[i] >= x - i) {
        if (i === 0) {
          results[x] = true;
          return true;
        }

        // shorten consequential '1's
        while (nums[i - 1] === 1) {
          i--;
        }

        reachableFrom.push(i);
      }
    }

    var r = false;
    for (i = 0; i < reachableFrom.length; i++) {
      r = r || canReach(reachableFrom[i]);
    }

    results[x] = r;
    return r;
  }

  return canReach(nums.length - 1);
};
