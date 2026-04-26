/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var newS = s.split("").sort().join("");
    var newT = t.split("").sort().join("");
    return newS == newT;
};