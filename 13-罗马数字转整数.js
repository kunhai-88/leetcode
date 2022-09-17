// 罗马数字转整数
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/roman-to-integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let simpleHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let composeHash = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let arr = [...s];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // 不是后一位时，尝试组合
    if (i + 1 < arr.length) {
      let compose = arr[i] + arr[i + 1];
      if (composeHash[compose]) {
        res.push(composeHash[compose]);
        i++;
      } else {
        res.push(simpleHash[arr[i]]);
      }
    } else {
      res.push(simpleHash[arr[i]]);
    }
  }
  return res.reduce((prev, cur) => prev + cur, 0);
};
