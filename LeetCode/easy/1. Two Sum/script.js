/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashmap = {};
    let rem = 0;
    for(let i=0; i<nums.length; i++){
        rem = target - nums[i];
        if(hashmap[rem] !== undefined){
            return [hashmap[rem], i];
        }
        else{
            hashmap[nums[i]] = i;
        }
    }
    return [];
    
};