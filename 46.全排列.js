/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.89%)
 * Likes:    2457
 * Dislikes: 0
 * Total Accepted:    820.1K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    
    const trackBack = (index, arr) => {
        if (index === nums.length) {
            res.push(new Array(...arr));
        } else {
            for (let i of nums) {
                if (!arr.includes(i)) {
                    arr.push(i);
                    trackBack(index + 1, arr);
                    arr.pop();
                }
            }
        }
    }
    if (nums.length === 1) return [nums];

    trackBack(0, []);
    return res;
};

var permute = function(nums) {
    const res = [];
    const used = {};

    const trackBack = (index, arr) => {
        // 退出条件
        if (index === nums.length) {
            res.push([...arr]);
            return;
        }

        for(let num of nums) {
            if (!used[num]) {
                // 做出选择
                arr.push(num);
                used[num] = true; 
                // 递归, 深入进行选择
                trackBack(index + 1, arr);
                // 撤销选择
                arr.pop();
                used[num] = false;
            }
        }

    }
    trackBack(0, []);

    return res;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end