/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//   // return nums.sort((a,b)=>a-b).at(-k)
//
// };

var findKthLargest = function (nums, k) {
  function Queue(n) {
    this.n = n;
    this.queue = [];
  }
  Queue.prototype.put = function (v) {
    if(this.queue.length < 1){
       this.queue.push(v);
       return this.queue;
    } 
    if (this.queue.length === this.n && this.queue[0] > v) {
      return this.queue;
    }
    let l = 0;
    let r = this.queue.length;
    while (l <= r) {
        let mid = Math.floor((r-l) / 2) + l;
        if (this.queue[mid] === v) {
           l = mid
           break;
        } else if (this.queue[mid] < v) {
           l = mid + 1;
        } else {
           r = mid - 1;
        }
    }  
    this.queue.splice(l,0,v)
   
    if (this.queue.length > this.n) {
      this.queue.shift();
    }
    return  this.queue;;
  };
  Queue.prototype.peek = function () {
    return this.queue[0];
  };
  var queue = new Queue(k);
  for (let item of nums) {
    queue.put(item);
  }
  return queue.peek();
};
