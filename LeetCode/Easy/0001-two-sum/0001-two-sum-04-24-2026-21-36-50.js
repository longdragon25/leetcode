/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var indices = {};
    for(var i=0;i<nums.length;i++){
        var diff = target - nums[i];
        if(diff in indices){
            return [indices[diff],i];
        }
        indices[nums[i]]=i;
    }
    return [];
};