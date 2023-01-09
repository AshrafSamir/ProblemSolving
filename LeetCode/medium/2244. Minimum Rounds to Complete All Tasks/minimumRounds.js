var minimumRounds = function (tasks) {
  let freqObj = {};
  for (let i = 0; i < tasks.length; i++) {
    if (freqObj[tasks[i]] == undefined) {
      freqObj[tasks[i]] = 1;
    } else {
      freqObj[tasks[i]]++;
    }
  }

  let rounds = 0;
  for (let i in freqObj) {
    if (freqObj[i] == 1) return -1;
    if (freqObj[i] % 3 == 0) {
      rounds += freqObj[i] / 3;
    } else {
      rounds += Math.floor(freqObj[i] / 3) + 1;
    }
  }
  return rounds;
};

console.log(minimumRounds([2, 3, 3]));
