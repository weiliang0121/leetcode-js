/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[index] !== nums[i]) {
      nums[index + 1] = nums[i];
      index += 1;
    }
  }

  return index + 1;
};