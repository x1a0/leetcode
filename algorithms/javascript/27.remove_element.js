/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var p = nums.length - 1;
  while (nums[p] === val) p--;

  for (var i = 0; i < p; i++) {
    if (nums[i] === val) {
      nums[i] = nums[p];
      p--;
      while (nums[p] === val) p--;
    }
  }

  return p + 1;
};
