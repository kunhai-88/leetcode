// 两数之和 (https://leetcode.cn/problems/two-sum/) 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 优化版本

var twoSum = function (nums, target) {
  const hashMap = new Map([[target - nums[0], 0]]);
  for (let i = 1; i < nums.length; i++) {
    const item = nums[i];
    if (hashMap.has(item)) {
      return [hashMap.get(item), i];
    } else {
      hashMap.set(target - item, i);
    }
  }
  return [];
};

// 基础版
// var twoSum = function(nums, target) {
//   const resMap = {};
//   const size = nums && nums.length;
//   for(let i=0;i<size; i++){
//     const item = nums[i]
//      resMap[item] = {
//         res :target - item,
//         index:i,
//      }
//   }
//   for(let i=0;i<size; i++){
//     const item = nums[i];
//     const diff = target - item;
//     if(resMap[diff]&&i!==resMap[diff]?.index){
//       return [i, resMap[diff]?.index  ]
//     }
//      if(resMap[diff] ===0 &&i!==resMap[diff]?.index){
//       return [i, resMap[diff]?.index  ]
//     }
//   }
//   console.log(resMap)
// };
