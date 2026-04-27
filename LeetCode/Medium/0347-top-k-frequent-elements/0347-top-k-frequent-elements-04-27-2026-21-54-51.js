/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = {};
  for(var num of nums){
    map[num] = (map[num]||0)+1;
  }

  const arr = Object.entries(map).map(([num,freq])=>[freq,parseInt(num)]);
  arr.sort((a,b)=>b[0]-a[0]);
  return arr.slice(0,k).map((pair)=>pair[1])
};