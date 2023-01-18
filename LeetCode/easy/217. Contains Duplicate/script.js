var containsDuplicate = function(nums) {
let appeared = [];
let distinct = true;
for(let i=0; i<nums.length; i++){
    if(appeared[nums[i]] === undefined){
        appeared[nums[i]] = 1;    
    }
    else{
        distinct = false;
        appeared[nums[i]] += 1;   
    }
}
return !distinct;
};


console.log(containsDuplicate([1,2,3,1]));