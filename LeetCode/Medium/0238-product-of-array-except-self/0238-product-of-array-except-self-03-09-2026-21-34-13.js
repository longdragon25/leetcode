/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // count number 0
  let countZero = 0;
  let product = 1;
  for (let num of nums) {
    if (num === 0) {
      countZero += 1;
    } else {
      product *= num;
    }
  }

  if (countZero > 1) {
    return Array(nums.length).fill(0);
  }

  const res = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (countZero > 0) {
      res[i] = nums[i] === 0 ? product : 0;
    } else {
      res[i] = product / nums[i];
    }
  }
  return res;
};