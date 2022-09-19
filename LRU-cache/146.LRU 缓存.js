// [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)
function findIndex(arr, target) {
  return arr?.findIndex(({ key }) => target === key);
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.list = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const index = findIndex(this.list, key);
  if (index < 0) {
    return index;
  }
  let item = this.list[index];
  this.list.splice(index, 1);
  this.list.push(item);
  return item.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const index = findIndex(this.list, key);
  if (index > -1) {
    this.list.splice(index, 1);
  }
  this.list.push({
    key,
    value,
  });

  if (this.list.length > this.capacity) {
    // 缓存超过长度时出队
    this.list.shift();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
