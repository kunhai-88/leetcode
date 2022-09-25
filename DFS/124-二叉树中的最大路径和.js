// [124.二叉树中的最大路径和]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = -Infinity;
    function dfs(root){
       if (!root) {
         return 0;
       }
       let leftMax = Math.max(dfs(root.left), 0);
       let rightMax = Math.max(dfs(root.right), 0);
       // 当前节点队路径的最大贡献子
       let cur = Math.max(root.val + leftMax, root.val + rightMax, 0);
       // 可能形成的最大路径
       max = Math.max(root.val + leftMax + rightMax, max)
       return cur;
    }
    dfs(root);
    return max;
 };