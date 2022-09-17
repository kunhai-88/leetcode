/** [有效括号] https://leetcode.cn/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) {
    return false;
  }
  const uniqMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];
  let top = null;
  for (item of s) {
    if (uniqMap[top] === item) {
      stack.pop();
      top = stack.at(-1);
    } else {
      top = item;
      stack.push(item);
    }
  }
  return stack.length === 0;
};
