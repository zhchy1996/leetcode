/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.12%)
 * Likes:    1553
 * Dislikes: 0
 * Total Accepted:    974.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
 */

// @lc code=start
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

// 遍历二叉树的思路
var maxDepth = function(root) {
    let res = 0;
    let depth = 0;

    const traverse = node => {
        if (node === null) {
            return;
        }
        depth ++;
        if (node.left === null && node.right === null) {
            res = Math.max(res, depth);
        }
        traverse(node.left);
        traverse(node.right);
        depth--;
    }

    traverse(root);

    return res;
};

// 分解问题的思路
var maxDepth = function(root) {
    if (root === null) return 0;
    
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1;
}
// @lc code=end

