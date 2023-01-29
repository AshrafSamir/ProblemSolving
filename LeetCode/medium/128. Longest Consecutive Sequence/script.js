/**
 * @param {number[]} nums
 * @return {number}
 */

// optimized solution
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let temp = nums[i];
      let counter = 1;
      while (set.has(temp + 1)) {
        temp++;
        counter++;
      }

      max = Math.max(max, counter);
    }
  }
  return max;
};

var longestConsecutive1 = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let current = nums[i];
      let counter = 1;
      while (set.has(current + 1)) {
        current++;
        counter++;
      }
      max = Math.max(max, counter);
    }
  }
  return max;
};

// my first solution
var longestConsecutive2 = function (nums) {
  let set = new Set(nums);
  nums = Array.from(set);
  let map = new Map();
  let max = 0;
  let counter = 1;
  while (nums.length) {
    let temp = nums[0] - 1;

    while (nums.includes(temp)) {
      nums.splice(nums.indexOf(temp), 1);
      temp = temp - 1;
      counter++;
    }

    if (map[temp] !== undefined) map[nums[0]] = counter + map[temp];
    else map[nums[0]] = counter;
    max = Math.max(max, map[nums[0]]);
    nums.splice(0, 1);

    counter = 1;
  }

  return max;
};

console.log(longestConsecutive([0, 1, -1]));
