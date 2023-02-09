/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if (s[i] == ")" && last !== "(") return false;
      if (s[i] == "}" && last !== "{") return false;
      if (s[i] == "]" && last !== "[") return false;
    }
  }
  if (stack.length === 0) return true;
  return false;
};

