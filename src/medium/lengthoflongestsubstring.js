/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  const n = s.length;
  let ans = 0;
  let rk = 0;

  for (let i = 0; i < n; i += 1) {
    if (i !== 0) occ.delete(s[i - 1]);

    while(rk < n && !occ.has(s[rk])) {
      occ.add(s[rk]);
      rk += 1;
    }

    ans = Math.max(ans, rk - i);
  }

  return ans;
};

// 滑动窗口 左右指针
// rk 为什么从-1开始 rk + 1? nrk = ork + 1? 官方貌似都喜欢从一个空边界开始

// i = left
// while (rk < n) {
//   if (!occ.has(s[rk])) {
//     occ.add(s[rk]);
//     rk += 1;
//   } else {
//     occ.delete(s[left]);
//     left += 1;
//   }

//   ans = Math.max(ans, occ.size());
// }

