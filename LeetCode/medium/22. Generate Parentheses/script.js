/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  (function generate(left, right, str) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left < n) {
      generate(left + 1, right, str + "(");
    }
    if (right < left) {
      generate(left, right + 1, str + ")");
    }
  })(0, 0, "");

  return result;
};

//test case
console.log(generateParenthesis1(3)); // ["((()))","(()())","(())()","()(())","()()()"]
