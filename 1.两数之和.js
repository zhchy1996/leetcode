/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (50.28%)
 * Likes:    10354
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * -10^9 
 * -10^9 
 * 只会存在一个有效答案
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// best solution

// var twoSum = function(nums, target) {
//     let hash = {};
	
// 	for(let i = 0; i < nums.length; i++) {
// 		const n = nums[i];
// 		if(hash[target - n] !== undefined) {
// 			return [hash[target - n], i];
// 		}
// 		hash[n] = i;
// 	}
// 	return [];
// };

var twoSum = function(nums, target) {
    let i = 0,
        j = 0;
    const {length} = nums;
    for(;i < length; i += 1) {
        const pre = nums[i];
        for (j = i + 1; j < length; j += 1) {
            if (pre + nums[j] === target) return [i, j];
        }
    }
};
// @lc code=end

