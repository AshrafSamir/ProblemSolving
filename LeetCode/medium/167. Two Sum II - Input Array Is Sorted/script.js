/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0,
    j = 1;

  while (i < numbers.length) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else {
      j++;
      if (j === numbers.length) {
        i++;
        j = i + 1;
      }
    }
  }
};

var twoSum1 = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
};

var twoSum2 = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }
};

console.log(twoSum1([2, 7, 11, 15], 9));
