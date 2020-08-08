/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length <= 0) return '';

  const len = strs[0].length;
  for (let i = 0; i < len; i += 1) {
    const c = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (i === strs[j].length || c !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};