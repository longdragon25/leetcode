/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};
    for(var str of strs){
        const key = str.split("").sort().join("");
        if(!result[key]){
            result[key] = []
        }
        result[key].push(str);
    }
    return Object.values(result);
};