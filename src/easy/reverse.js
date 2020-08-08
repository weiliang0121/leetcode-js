/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  let rev = 0;
  let pop = 0;
  while(x !== 0) {
    pop = x % 10;
    x = parseInt(x / 10, 10);

    if ((rev > parseInt(max / 10, 10)) || (rev === parseInt(max / 10, 10) && pop > 7)) return 0;
    if ((rev < parseInt(min / 10, 10)) || (rev === parseInt(min / 10, 10) && pop < -8)) return 0;

    rev = rev * 10 + pop;
  }

  return rev;
};
