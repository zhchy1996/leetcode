/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.46%)
 * Likes:    1332
 * Dislikes: 0
 * Total Accepted:    439.3K
 * Total Submissions: 670.9K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 排序
    nums.sort((a, b) => a - b);

    const res = [];
    const used = [];
    const track = [];

    const trackBack = () => {
        if (track.length === nums.length) {
            res.push([...track]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            used[i] = true;
            track.push(nums[i]);
            trackBack();
            track.pop();
            used[i] = false;
        }
    }

    trackBack();

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permuteUnique;
// @after-stub-for-debug-end