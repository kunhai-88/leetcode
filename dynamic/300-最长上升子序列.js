// 最长上升子序列 https://leetcode.cn/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划，时间复杂度 O(n^2)
 var lengthOfLIS = function(nums) {
    if(!nums || nums.length < 1){
      return 0;
    }
    //动态规划
    let res = 1;
    let dp = Array(nums.length + 1).fill(1);  
    for (let i = 1; i < nums.length; i++){
      for (let j = 0; j < i; j++){
        if(nums[j] < nums[i]){
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
      res = Math.max(res, dp[i])
    }
    return res;
  };
  // 通过二分查找构建递增子序列(优先队列) O(nlogn)
  // var lengthOfLIS = function(nums) {
  //   if (!nums || nums.length <1) {
  //     return 0;
  //   }
  //   let res = [nums[0]];
  //   for (let i =1; i < nums.length; i++) {
  //       if (nums[i] > res.at(-1)) { // 比队列中的值都大，入队
  //         res.push(nums[i])
  //       } else {
  //         let l = 0;
  //         let r = res.length - 1;
  //         while (l <= r) {
  //           let mid = Math.floor((l + r) / 2);
  //           if (res[mid] === nums[i]) {
  //             l = mid;
  //             break;
  //           } if (res[mid] < nums[i]){
  //             l = mid + 1;
  //           } else {
  //             r = mid - 1;
  //           }
  //         }
  //         res[l] = nums[i]; // 用当前的值替换队列中比现在大的值
  //       }
  //   }
  //   return res.length;
  // }