//[63. 不同路径 II]  https://leetcode.cn/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    if (m < 1) {
       return 0;
    }
    let n = obstacleGrid[0].length;
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    dp[0][1] = 1;
    for (let i = 1; i <= m; i++){
      for (let j = 1; j <= n; j++) {
        if (obstacleGrid[i - 1][j - 1] == 0) {
          dp[i][j] = dp[i-1][j] + dp[i][j -1]
        }
      }
    }
    console.log(dp)
    return dp[m][n];
 };