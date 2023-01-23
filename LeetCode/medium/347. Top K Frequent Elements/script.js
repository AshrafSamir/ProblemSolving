/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// faster than 87.48% of JavaScript online submissions for Top K Frequent Elements.
var topKFrequent = function (nums, k) {
  let freqArr = new Array(nums.length);
  let hashMap = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  for (let key in hashMap) {
    if (freqArr[hashMap[key]]) {
      freqArr[hashMap[key]].push(key);
    } else {
      freqArr[hashMap[key]] = [key];
    }
  }
  for (let i = freqArr.length - 1; i >= 0; i--) {
    if (freqArr[i]) {
      result.push(...freqArr[i]);
    }
    if (result.length === k) {
      return result;
    }
  }
  return result;
};

// not that fast
var topKFrequent = function (nums, k) {
  let hashMap = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxKey = 0;
    for (let key in hashMap) {
      if (hashMap[key] > max) {
        max = hashMap[key];
        maxKey = key;
      }
    }
    result.push(maxKey);
    delete hashMap[maxKey];
  }
  return result;
};

topKFrequent([3, 1, 1, 1, 2, 2], 2);
