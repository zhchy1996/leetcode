/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode.cn/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (58.28%)
 * Likes:    1294
 * Dislikes: 0
 * Total Accepted:    304.7K
 * Total Submissions: 522.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * 
 * 
 * 
 * 示例 :
 * 给定二叉树
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 * 
 * 
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    // 求子树深度
    const deep = (root) => {
        if (root === null) {
            return 0;
        }
        const left = deep(root.left);
        const right = deep(root.right);
        return Math.max(left, right) + 1;
    }

    const traverse = root => {
        if (root === null) {
            return;
        }
        // 获得左右子树深度
        const left = deep(root.left);
        const right = deep(root.right);
        const my = left + right;
        if (my > res) res = my;
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    return res;
};

var diameterOfBinaryTree = function(root) {
    let res = 0;

    const maxDepth = root => {
        if (root === null) return 0;
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        const my = left + right;
        res = Math.max(my, res);

        return Math.max(left, right) + 1;
    }

    maxDepth(root);
    return res;
}
// @lc code=end

