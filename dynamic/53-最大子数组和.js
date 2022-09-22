// [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)
// 状态转移方程  dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length < 1) {
    return 0;
  }
  let dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};
