//
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  // 暴力解法 超时
  let sorted = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] == sorted[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      let sum = sorted[i] + sorted[l] + sorted[r];
      if (sum < 0) {
        l = l + 1;
      } else if (sum > 0) {
        r = r - 1;
      } else {
        res.push([sorted[i], sorted[l], sorted[r]]);
        while (l < r && sorted[l] === sorted[l + 1]) {
          l = l + 1;
        }
        while (l < r && sorted[r] === sorted[r - 1]) {
          r = r - 1;
        }
        l = l + 1;
        r = r - 1;
      }
    }
  }

  return res;
};
