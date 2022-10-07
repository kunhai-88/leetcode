/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    if(height.length < 3) {
      return 0
    }
    let len = height.length;
    let leftMax = [height[0]];
    let rightMax = Array(len).fill();
    let total = 0;
    rightMax[len-1] = height.at(-1);
    for (let i = 1; i < height.length; i++){
       leftMax[i] = Math.max(leftMax[i-1], height[i])
    } 
    for (let j = height.length - 2; j > -1; j-- ){
       rightMax[j] = Math.max(rightMax[j+1], height[j])
    }
    for (let i = 1; i < len; i++) {
       total = total + Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return total;
 
 };