// [704. 二分查找](https://leetcode.cn/problems/binary-search/)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 左指针
  let l = 0;
  // 右指针
  let r = nums.length - 1;
  // 左右指针相等时退出循环
  while (l <= r) {
    // 寻找中点
    let mid = Math.floor((r - l) / 2) + l;
    if (nums[mid] === target) {
      // 找到目标值 返回下标
      return mid;
    } else if (nums[mid] > target) {
      // 移动右指针
      r = mid - 1;
    } else {
      // 移到左指针
      l = mid + 1;
    }
  }
  // 默认没有查找到
  return -1;
};
