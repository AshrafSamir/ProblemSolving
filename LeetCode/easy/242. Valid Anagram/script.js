/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    return s.split('').sort().join('') == t.split('').sort().join('');
};

let s = "anagram", t = "nagaram"
console.log(isAnagram(s, t));