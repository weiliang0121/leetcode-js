/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length < 1) return '';

  let start = 0;
  let end = 0;

  const expand = (str, l, r) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l -= 1;
      r += 1;
    }

    return r - l - 1;
  };

  for (let i = 0; i < s.length; i += 1) {
    const len1 = expand(s, i, i);
    const len2 = expand(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
};

// abacd
// 为什么是end + 1 不是在计算式里面计算 初步猜想 start end都是精确的 end + 1是为了slice的时候
// start end的语义就是指左右指针的位置，而不是最后返回字段的范围
// start = i - half? i 的中心问题导致的start计算的时候需要特别考虑


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_DP = function(s) {
  const n = s.length;
  const dp = [];
  let ans = '';

  for (let l = 0; l < n; l += 1) {
    for (let i = 0; i + l < n; i += 1) {
      if (i === dp.length) dp.push([]);

      let j = i + l;

      if (l === 0) dp[i][j] = true;
      else if (l === 1) dp[i][j] = s[i] === s[j];
      else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }

      if (dp[i][j] && l + 1 > ans.length) {
        ans = s.slice(i, j + 1);
      }
    }
  }

  return ans;
};

// 动态规划很慢

// 马拉车再说吧