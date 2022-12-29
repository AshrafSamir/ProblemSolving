// console.log("firstPointer: " + firstPointer + " secPointer: " + secPointer + " counter: " + counter + " visited: " + visited +" maxNumber: " + maxNumber);
var lengthOfLongestSubstring1 = function(s) {


  let firstPointer = 0;
  let secPointer = 0;
  let maxNumber = 0;
  let counter = 0;
  let visited = [];
  let isVisited = false;

  while(secPointer < s.length){
    for(let j=0; j<visited.length; j++){
      if(visited[j] == s[secPointer])
      {
        isVisited = true;
        break;
      }
    }

    
  
  
    console.log(isVisited)
    if(!isVisited){
      visited.push(s[secPointer]);
      counter++;
      secPointer++;
      if (counter > maxNumber)maxNumber = counter;
    }else{
      counter = 0;
      firstPointer++;
      secPointer = firstPointer
      isVisited = false;
      visited = [];
    }
    
  }
  return maxNumber
    
};


var lengthOfLongestSubstring = function(s) {

  let firstPointer = 0;
  let secPointer = 0;
  let maxNumber = 0;

  let visited = new Set();
  for(let i=0; i<s.length; i++){
    if(!visited.has(s[i])){
      visited.add(s[i]);
      secPointer++;
      if (secPointer - firstPointer > maxNumber)maxNumber = secPointer - firstPointer;
    }else{
      visited.delete(s[firstPointer]);
      firstPointer++;
      i--;
    }
  }
  return maxNumber
    
};


console.log(lengthOfLongestSubstring("abcabcbb"));