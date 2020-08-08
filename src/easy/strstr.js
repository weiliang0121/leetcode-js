/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const L = needle.length;
  const N = haystack.length;

  if (L === 0) return 0;

  let pn = 0;
  while (pn < N - L + 1) {
    while(pn < N - L + 1 && haystack[pn] !== needle[0]) pn += 1;

    let pl = 0;
    let curLen = 0;

    while (pl < L && pn < N && haystack[pn] === needle[pl]) {
      pl += 1;
      pn += 1;
      curLen += 1;
    }

    if (curLen === L) return pn - L;

    pn = pn - curLen + 1;
  }

  return -1;
};

// 1. 遍历长度 N - L + 1
// 2. 快速到第一个遍历位置
// 3. 窗口滑动
// 4. 回退到上次开始匹配的下一个字符 ———— 没办法快进吗？不能 例子：iii 不能判断下一个字符是不是可以作为开头