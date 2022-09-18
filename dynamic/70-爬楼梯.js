// [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划解法
// 递推公式 F(n) = F(n-1) + F(n-2)
var climbStairs = function (n) {
  let dp = [0, 1, 2]; // 零级台阶，一级台阶，二级台阶
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// 递归加记忆化
// var climbStairs = function (n) {
//   let memo = new Map();
//   function recursion(n) {
//     // n=1 return 1,n=2 return 2
//     if (n < 3) {
//       return n;
//     }
//     if (memo.has(n)) {
//       return memo.get(n);
//     }
//     return memo.has(n)
//       ? memo.get(n)
//       : memo.set(n, recursion(n - 1) + recursion(n - 2)).get(n);
//   }
//   return recursion(n);
// };
// 递推
// var climbStairs = function (n) {
//   let prev = 1; // 一级台阶
//   let prev2 = 2; // 二级台阶
//   let total = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i < 3) {
//       total = i === 1 ? prev : prev2;
//     } else {
//       total = prev2 + prev;
//       prev = prev2;
//       prev2 = total;
//     }
//   }
//   return total;
// };
