// [括号生成] https://leetcode.cn/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  if (n < 1) {
    return res;
  }
  function dfs(left, right, n, prev) {
    // console.log(left)
    if (left === n && right === n) {
      // console.log(prev);
      res.push(prev);
      return;
    }
    // console.log(prev);
    if (left < n) {
      dfs(left + 1, right, n, prev + "(");
    }
    if (left > right && right < n) {
      dfs(left, right + 1, n, prev + ")");
    }
  }
  dfs(0, 0, n, "");

  return res;
};
