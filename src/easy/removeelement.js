/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;
};

// 正常想法把不是的数存储在新的数组中
// 只是这个“新的数组”是原来的数组, 快指针遍历过了，前面的空间就无用了