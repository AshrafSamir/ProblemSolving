/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b) | 0,
  };
  for (let i = 0; i < tokens.length; i++){
    if (tokens[i] in operators) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(operators[tokens[i]](a, b));
    } else {
      stack.push(+tokens[i]);
    }
  }
  return stack.pop();
};

//Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22
