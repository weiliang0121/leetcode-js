/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;

  let ans = 0;
  while (left < right) {
    const temp = Math.min(height[left], height[right]) * (right - left);
    if (temp > ans) ans = temp;

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return ans;
};

// 暴力法？
// 左右指针？