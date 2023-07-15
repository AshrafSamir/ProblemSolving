// console.log("firstPointer: " + firstPointer + " secPointer: " + secPointer + " counter: " + counter + " visited: " + visited +" maxNumber: " + maxNumber);
var lengthOfLongestSubstring1 = function (s) {
  let visited = {};
  let maxSeq = 0;
  let counter = 0;
  if (s.length === 1) return 1;
  for (let i = 0, j = i; j < s.length; ) {
    if (!visited[s[j]]) {
      visited[s[j]] = s[j];
      counter++;
      j++;
    } else {
      visited = {};
      i++;
      j = i;
      counter = 0;
    }
    maxSeq = Math.max(maxSeq, counter);
  }
  return maxSeq;
};

var lengthOfLongestSubstring = function (s) {
  let firstPointer = 0;
  let secPointer = 0;
  let maxNumber = 0;

  let visited = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!visited.has(s[i])) {
      visited.add(s[i]);
      secPointer++;
      if (secPointer - firstPointer > maxNumber)
        maxNumber = secPointer - firstPointer;
    } else {
      visited.delete(s[firstPointer]);
      firstPointer++;
      i--;
    }
  }
  return maxNumber;
};

console.log(lengthOfLongestSubstring1("su"));
