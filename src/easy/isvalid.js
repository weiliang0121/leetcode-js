/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false;

  const hashMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    
    if (stack.length >= 1 && hashMap[c] === stack[stack.length - 1]) stack.pop();
    else stack.push(c);
  }

  return stack.length <= 0;
};