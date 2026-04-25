/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var length = nums.length;
    var result = new Array(length).fill(1);

    var left = 1;
    for(var i =0; i<length;i++){
        result[i] = left;
        left = left * nums[i]
    }

    var right = 1;
    for(var i = length-1;i>=0;i--){
        result[i]= result[i]*right;
        right = right * nums[i]
    }
    return result;
};