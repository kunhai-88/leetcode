/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// 状态转移方程
// dpMax = Math.max(dpMax, dpMin, num[i])
// dpMin = Math.min(dpMax, dpMin, num[i])
var maxProduct = function (nums) {
  let max, min, res;
  max = min = res = nums[0]; //状态初始化
  for (let i = 1; i < nums.length; i++) {
    let curMax = max * nums[i];
    let curMin = min * nums[i];
    max = Math.max(curMax, curMin, nums[i]);
    min = Math.min(curMax, curMin, nums[i]);
    if (max > res) {
      res = max;
    }
  }
  return res;
};
