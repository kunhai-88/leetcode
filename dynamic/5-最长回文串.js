
// [最长回文串](https://leetcode.cn/problems/longest-palindromic-substring/) 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let begin = 0;
  let maxLen = 1; // 回文串最大长度
  let dp = Array(len)
    .fill()
    .map(() => Array().fill(true));
  // 枚举回文串可能的长度
  for (let k = 2; k <= len; k++) {
    // 遍历所有可能长度的字符串，判断是不是回文串
    for (let i = 0; i < len; i++) {
      let j = k + i - 1;
      if (j > len) { 
        // 不可能存在比字符串本身还长的回文串，退出循环
        break;
      }
      if (s[i] != s[j]) { 
        dp[i][j] = false;
      } else {
        if (j - i < 3) { // 长度为2左右两侧相等的字符串为回文串
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];//当前串是不是回文串和子串一样
        }
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};
