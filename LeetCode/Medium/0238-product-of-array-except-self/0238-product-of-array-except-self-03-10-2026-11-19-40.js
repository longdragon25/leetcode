/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  let leftProd = new Array(length);
  let rightProd = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i == 0) {
      leftProd[i] = 1;
    } else {
      leftProd[i] = leftProd[i - 1] * nums[i-1];
    }
  }

  for (let i = length; i >= 0; i--) {
    if (i == length-1) {
      rightProd[i] = 1;
    } else {
      rightProd[i] = rightProd[i + 1] * nums[i+1];
    }
  }

  let res = new Array(length);
  for (let i = 0; i < length; i++) {
    res[i] = rightProd[i] * leftProd[i];
  }

  return res;
};