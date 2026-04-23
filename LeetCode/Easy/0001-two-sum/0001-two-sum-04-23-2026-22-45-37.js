/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var indices = {}

    for(let i = 0; i<nums.length; i++){
        var diff = target - nums[i];
        if(diff in indices){
            return [i,indices[diff]];
        }
        indices[nums[i]] = i 
    }
    
    return [];
};