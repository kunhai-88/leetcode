//  [120. 三角形的最小路径和](https://leetcode.cn/problems/triangle/)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 动态规划
// 状态转移方程 dp[j] = min(dp[j], dp[j + 1]) + triangle[i][j]
var minimumTotal = function (triangle) {
  let dp = triangle.at(-1);
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 计算没一行的状态
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
