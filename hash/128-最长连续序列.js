// [128.最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    if (nums.length < 2) {
      return nums.length;
    }
    let uniq = new Set(nums);
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
      if (!uniq.has(nums[i] - 1)) {
         let count =  1;
         let current = nums[i];
         while (uniq.has(current + 1)) {
            count++;
            current++;
         }
         max = Math.max(count, max)
      }
    }
    return max;
}

// 暴力解法 算法复杂度O(nlogn)
// var longestConsecutive = function(nums) {
//   if (nums.length < 2) {
//      return nums.length;
//   }
//   nums.sort((a, b) => a - b);
//   let max = 1;
//   let count = 1;
//   for (let i = 1; i < nums.length; i++){
//      if(nums[i] === nums[i-1] + 1){
//         count++;
//      } else if(nums[i] === nums[i-1]){
//         continue;
//      } else {
//         count = 1
//      }
//      max = Math.max(max, count)
//   }
//   return max;
// };