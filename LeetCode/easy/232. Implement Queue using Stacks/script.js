var MyQueue = function () {
  (this.s1 = []), (this.s2 = []);
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.s2.length) {
    this.s1.push(this.s2.pop());
  }
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  return !this.s2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
