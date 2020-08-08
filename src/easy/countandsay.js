/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';

  let res = '1';

  while (n > 1) {
    let i = 0;
    let count = 1;
    let temp = '';
    let c = res[0];

    while (i + 1 < res.length) {
      i += 1;
      if (c !== res[i]) {
        temp += `${count}${c}`;
        c = res[i];
        count = 1;
      } else count += 1;
    }

    temp += `${count}${c}`;

    res = temp;
    n -= 1;
  }

  return res;
};

// '1' -> count = 1, c = '1' `${count}${c}` -> '11'
// '11' -> count =  2, c = '1' `${count}${c}` -> '21'
// '21' -> count = 1, c = '2' `${count}${c}` -> '12'
//     -> count = 1, c = '1' '12' + `${count}${c}` -> '1211'
// '1211' -> ...

// console.log(countAndSay(2));
// console.log(countAndSay(3));
// console.log(countAndSay(4));
// console.log(countAndSay(5));
// console.log(countAndSay(6));