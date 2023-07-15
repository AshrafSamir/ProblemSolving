/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length == 1) return romanValues[s[0]];
  let resultArr = [];
  resultArr.push(romanValues[s[0]]);
  for (let i = 1; i < s.length; i++) {
    if (romanValues[s[i]] > romanValues[s[i - 1]]) {
      resultArr.push(romanValues[s[i]] - resultArr.pop());
    } else {
      resultArr.push(romanValues[s[i]]);
    }
  }
  let sum = 0;
  for (let i = 0; i < resultArr.length; i++) {
    sum += resultArr[i];
  }
  return sum;
};
console.log(romanToInt("MCMXCIV"));
