/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  let ans = n;

  while (l <= r) {
    const m = ((r - l) >> 1) + l;
    if (nums[m] >= target) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return ans;
};

// 不会二分法？？？？