// [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 使用队列加循环实现广度优先遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const list = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let item = queue.shift();
      level.push(item.val);
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    list.push(level);
  }
  return list;
};
// var levelOrder = function(root) {
//     if(!root){
//        return [];
//     }
//     const list = [];
//     function recursion(node, list, level){
//         if(node === null){
//             return ;
//         }
//         if(list.length <= level){
//            list.push([])
//         }
//         list[level].push(node.val);
//         recursion(node.left, list, level+1);
//         recursion(node.right, list, level+1)
//     }
//     recursion(root, list, 0)
//     return list;
// };
