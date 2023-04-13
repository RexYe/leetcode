/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const m = new Map();
    const len = nums.length;
    for(let i=0; i<len; i++) {
        if(!m.has(target-nums[i])) {
            m.set(nums[i], i)
        }else {
            return [i, m.get(target-nums[i])]
        }
    }
};