var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0, j = i + 1; j < prices.length; ) {
    if (prices[i] > prices[j]) {
      i = j;
      j = i + 1;
    } else {
      profit = Math.max(profit, prices[j] - prices[i]);
      j++;
    }
  }
  return profit;
};

console.log(maxProfit([2, 4, 1]));
