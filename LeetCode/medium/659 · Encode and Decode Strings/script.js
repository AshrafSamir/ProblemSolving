/*
 * @param strs: a list of strings
 * @return: encodes a list of strings to a single string.
 */
function encode(strs) {
  // write your code here
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result += strs[i].length + ";" + strs[i];
  }
  return result;
}

/*
 * @param str: A string
 * @return: dcodes a single string to a list of strings
 */
function decode(str) {
  // write your code here
  let result = [];
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ";") {
      num += str[i];
    } else {
      let len = parseInt(num);
      let temp = "";
      for (let j = i + 1; j < i + 1 + len; j++) {
        temp += str[j];
      }
      result.push(temp);
      i = i + len;
      num = "";
    }
  }
  return result;
}

function decode1(str) {
  let result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== ";") {
      j++;
    }
    let len = parseInt(str.slice(i, j));
    result.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return result;
}

console.log(encode(["lint", "code", "love", "you"]));
console.log(decode(encode(["lint", "code", "love", "you"])));
