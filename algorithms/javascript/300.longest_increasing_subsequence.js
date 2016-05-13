/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var longests = [];
  for (var i = nums.length - 1; i >= 0; i--) {
    var longest = 1;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && longests[j] + 1 > longest) {
        longest = longests[j] + 1;
      }
    }
    longests[i] = longest;
  }

  var r = 0;
  for (i = 0; i < longests.length; i++) {
    if (longests[i] > r) {
      r = longests[i];
    }
  }

  return r;
};
