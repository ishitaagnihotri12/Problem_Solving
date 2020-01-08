/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
  let tmp = 0;
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        for (let j = 1; j < n - i; ++j) {
            if (nums[j-1] > nums[j]) {
                tmp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = tmp;
            }
        }
    }
    return nums;
};