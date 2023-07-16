/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expandFromCenter(s, i, i);
    let even = expandFromCenter(s, i - 1, i);
    if (odd.length > longest.length) {
      longest = odd;
    }
    if (even.length > longest.length) {
      longest = even;
    }
  }
  return longest;
};
let expandFromCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
};

console.log(longestPalindrome("babad"));
