/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var next, temp;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != i+1) {
      next = nums[i];
      do {
        temp = nums[next - 1];
        nums[next - 1] = next;
        next = temp;
      } while (next > 0 && next <= nums.length && nums[next - 1] !== next);
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      break;
    }
  }
  return i + 1;
};
