/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let l=nums.length;
    let ans=[];
    nums.sort();

   for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i+1]){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};