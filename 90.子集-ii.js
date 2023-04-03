/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode.cn/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (63.67%)
 * Likes:    1065
 * Dislikes: 0
 * Total Accepted:    286.9K
 * Total Submissions: 450.6K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const track = [];
    nums.sort((a, b) => a - b);

    const trackBack = start => {
        res.push([...track]);

        for (let i = start; i < nums.length; i++) {
            // 这里是剪枝的关键, i > start 可以判断当前的选择是否是同层
            if (i > start && nums[i] === nums[i - 1]) continue;
            track.push(nums[i]);
            trackBack(i + 1);
            track.pop();
        }
    }

    trackBack(0);
    return res;
};
// @lc code=end

