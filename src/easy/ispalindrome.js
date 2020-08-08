/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) return false;

  let halfRev = 0;
  while (x > halfRev) {
    halfRev = halfRev * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return halfRev === x || (Math.floor(halfRev / 10) === x);
};