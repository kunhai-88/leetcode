/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums.length === 1) {
       return nums[0]
    }
    // return nums.sort((a,b) => a - b).at(0)
    let l = 0;
    let r = nums.length - 1;
    while (l < r){
      let mid = Math.floor((r-l) / 2) + l;
      if (nums[mid] < nums[r]) {
        r = mid;
      } else {
        l = mid + 1
      }
    }
    return nums[l]
  };