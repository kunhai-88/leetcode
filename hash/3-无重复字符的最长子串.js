// 3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s?.length < 2) {
       return s?.length;
    }
    let max = 1;
    for (let i = 0; i < s.length - 1; i++){
      let count = 1;
      let uniq = new Set([s[i]]);
      // 判断无重复字符的子串长度
      for (let j = i + 1;j < s.length; j++){
        if (!uniq.has(s[j])) {
          uniq.add(s[j]) 
          count ++;
        } else {
          break;
        }
      }
      max = Math.max(max, count)
    }
    return max;
  };