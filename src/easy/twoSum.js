/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  const len = nums.length;
  let diff;
  for (let i = 0; i < len; i += 1) {
    diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    else map.set(nums[i], i);
  }
};