/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = Number.MIN_SAFE_INTEGER;
  let temp = 0;

  for (let i = 0; i < nums.length; i += 1) {
    temp += nums[i];
    if (sum < temp) sum = temp;
    if (temp < 0) temp = 0;
  }

  return sum;
};

// sum < 0 就舍弃
// 只返回最大和，不要求返回数组
// 使用一个临时的连续和
// 如果临时的连续和大于sum就更新
// 临时的连续和的左右届如何确定
// 一个滑动窗口？
// 如何排除多余的case
// [-3, -1] [-1]
// 有一个正数都可以用上面的
// 如果全是负数呢？

// console.log(maxSubArray([-1]));