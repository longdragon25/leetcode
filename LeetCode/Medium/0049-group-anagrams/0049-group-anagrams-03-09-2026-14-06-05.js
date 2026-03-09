/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     const result = {}
     for(let i of strs){
        const key = i.split('').sort().join('');
        if(!result[key]){
            result[key]=[]
        }
        result[key].push(i)
     }
     return Object.values(result);
};