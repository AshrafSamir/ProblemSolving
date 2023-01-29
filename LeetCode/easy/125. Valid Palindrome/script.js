/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;
  s = s.toLowerCase();
  while (i < j) {
    while (
      (s[i].charCodeAt(0) > 122 || s[i].charCodeAt(0) < 97) &&
      i < j &&
      (s[i].charCodeAt(0) > 57 || s[i].charCodeAt(0) < 48)
    ) {
      i++;
    }
    while (
      (s[j].charCodeAt(0) > 122 || s[j].charCodeAt(0) < 97) &&
      i < j &&
      (s[j].charCodeAt(0) > 57 || s[j].charCodeAt(0) < 48)
    ) {
      j--;
    }

    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome("0P"));

// what is the ASCII code for a-z and A-Z?
// 97-122
// 65-90
// what does toLowerCase() return?
// a string
// does toLowerCase() mutate the original string?
// no
// how to convert a character to its ASCII code?
// charCodeAt()
// example:
// "a".charCodeAt(0)
// what is the parameter for charCodeAt()?
// index
// what is the time complixity of reverse a string?
// O(n)
