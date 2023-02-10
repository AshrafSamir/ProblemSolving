var MinStack = function () {
  this.stack = [];
  this.minArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minArr.length === 0) {
    this.minArr.push(val);
  } else if (val <= this.minArr[this.minArr.length - 1]) {
    this.minArr.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.stack.pop();
  if (popped === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop();
  }
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// test  case
// ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
// [[],[2],[0],[3],[0],[],[],[],[],[],[],[]]
let minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack.getMin()); // return -3
console.log(minStack.pop()); // return 0
console.log(minStack.getMin()); // return -2
console.log(minStack.pop()); // return -3
console.log(minStack.getMin()); // return -2
console.log(minStack.pop()); // return 0
console.log(minStack.getMin()); // return -2
