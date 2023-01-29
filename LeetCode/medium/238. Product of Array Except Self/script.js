var productExceptSelf = function (nums) {
  let pre = 1;
  let result = [1];

  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i - 1] * pre);
    pre = result[i];
  }
  pre = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= pre;
    pre *= nums[i];
  }

  return result;
};

// Time Complexity: O(n)
