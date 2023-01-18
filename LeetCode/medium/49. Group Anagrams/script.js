/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams1 = function (strs) {
  let allHash = [];
  let hashmap = {};
  let result = [];
  let subres = [];

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (hashmap[strs[i][j]] === undefined) {
        hashmap[strs[i][j]] = 1;
      } else {
        hashmap[strs[i][j]]++;
      }
    }
    allHash.push(hashmap);
    hashmap = {};
  }
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] == "") {
      subres.push("");
    } else subres.push(strs[i]);
    for (let j = i + 1; j < strs.length; j++) {
      let isEqual = true;
      if (Object.keys(allHash[i]).length !== Object.keys(allHash[j]).length)
        isEqual = false;
      for (let key in allHash[i]) {
        if (allHash[i][key] !== allHash[j][key]) {
          isEqual = false;
          break;
        }
      }
      if (isEqual) {
        subres.push(strs[j]);
        strs.splice(j, 1);
        allHash.splice(j, 1);
        j--;
      }
    }
    result.push(subres);
    subres = [];
  }

  return result;
};

var groupAnagrams = function (strs) {
  let result = {};
  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (result[sortedStr]) {
      result[sortedStr].push(str);
    } else {
      result[sortedStr] = [str];
    }
  }
  return Object.values(result);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams1(["", "b"]));
// console.log(groupAnagrams1(["a"]));
// console.log(groupAnagrams1(["", ""]));
// console.log(groupAnagrams1([""]));
// console.log(groupAnagrams1(["tea", "and", "ace", "ad", "eat", "dans"]));
