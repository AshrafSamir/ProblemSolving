var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let counter = 0;
  let myStack = [{ i: 0, h: heights[0] }];

  if (heights.length === 1) return heights[0];
  for (let i = 1; i < heights.length; i++) {
    counter = 0;
    if (myStack.length && heights[i] < myStack[myStack.length - 1].h) {
      while (myStack.length && heights[i] < myStack[myStack.length - 1].h) {
        let area =
          myStack[myStack.length - 1].h * (i - myStack[myStack.length - 1].i);
        maxArea = Math.max(maxArea, area);
        let c2 = 0;
        while (
          heights[myStack[myStack.length - 1].i + c2] !==
          myStack[myStack.length - 1].h
        ) {
          c2++;
        }

        myStack.pop();
        counter++;
        counter += c2;
      }
    }
    if (i === heights.length - 1 && myStack.length) {
      myStack.push({ h: heights[i], i: i - counter });
      while (myStack.length) {
        let area =
          myStack[myStack.length - 1].h *
          (i - myStack[myStack.length - 1].i + 1);
        maxArea = Math.max(maxArea, area, heights[heights.length - 1]);
        myStack.pop();
      }
    }
    myStack.push({ h: heights[i], i: i - counter });
  }

  return maxArea;
};

var largestRectangleAreaEnhanced = function (heights) {
  let maxArea = 0;
  let stack = [];
  heights.push(0); // Add a sentinel element to handle remaining elements

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
};

debugger;
console.log(largestRectangleAreaEnhanced([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])); //12

console.log(largestRectangleAreaEnhanced([3, 6, 5, 7, 4, 8, 1, 0])); //20
console.log(largestRectangleAreaEnhanced([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleAreaEnhanced([2, 4]));
console.log(largestRectangleAreaEnhanced([0, 0]));
console.log(largestRectangleAreaEnhanced([1]));

console.log(largestRectangleAreaEnhanced([0, 9])); // result 9
console.log(largestRectangleAreaEnhanced([2, 1, 2])); // result 3
console.log(largestRectangleAreaEnhanced([2, 1, 2, 3, 1])); // 5
console.log(largestRectangleAreaEnhanced([2, 1, 2, 3, 1, 2])); // 6
console.log(largestRectangleAreaEnhanced([2, 1, 2, 3, 1, 2, 2])); // 7
console.log(largestRectangleAreaEnhanced([2, 1, 2, 3, 1, 2, 2, 2])); // 8
console.log(largestRectangleAreaEnhanced([2, 1, 2, 3, 1, 2, 2, 2, 2])); // 9
