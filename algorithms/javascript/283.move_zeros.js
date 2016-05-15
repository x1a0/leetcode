/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === 0) {
      var j = i + 1;
      while (nums[j] === 0 && j < nums.length) j++;
      if (j >= nums.length) return;
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i++;
  }
};
