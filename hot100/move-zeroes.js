/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let j=0; 
    for(let i=0; i<len; i++) {
        if(nums[i] != 0) {
            if(nums[j] == 0) {
                const tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp
            }
            j++;
        }
    }
    return nums;
};