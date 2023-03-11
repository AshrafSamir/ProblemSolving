/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let result = [];
  position = position.map((p, index) => {
    return { p, s: speed[index] };
  });
  position = [...position].sort((a, b) => b.p - a.p);
  console.log(position);
  for (let i = 0; i < position.length; i++) {
    if (i == 0) {
      result.push(position[i]);
    } else {
      if (position[i].s <= result[result.length - 1].s) {
        result.push(position[i]);
      } else {
        let t =
          (result[result.length - 1].p - position[i].p) /
          (position[i].s - result[result.length - 1].s);
        let pos = position[i].p + position[i].s * t;

        if (pos > target) {
          result.push(position[i]);
        }
      }
    }
  }
  return result.length;
};











// a bit optimized
var carFleet1 = function (target, position, speed) {
  let cars = [];
  for (let i = 0; i < position.length; i++) {
    const timeToReachTarget = (target - position[i]) / speed[i];
    cars.push({
      pos: position[i],
      speed: speed[i],
      arrivalTime: timeToReachTarget,
    });
  }

  // sort by decreasing distance to target
  cars.sort((a, b) => b.pos - a.pos);

  let maxArrivalTime = 0;
  let fleetCount = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].arrivalTime > maxArrivalTime) {
      // a new car couldn't catch up to the previous leaders in time
      fleetCount++;
      maxArrivalTime = cars[i].arrivalTime;
    }
  }

  return fleetCount;
};














// test cases
let target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed)); //3
console.log(carFleet(10, [0, 4, 2], [2, 1, 3])); //1
console.log(carFleet(10, [6, 8], [3, 2])); //2
