/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.39%)
 * Likes:    2206
 * Dislikes: 0
 * Total Accepted:    748.1K
 * Total Submissions: 1.8M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums 是一个非递减数组
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binerySearch = (nums, target, lower) => {
        let start = 0;
        let end = nums.length - 1; //这里决定了区间
        while (start <= end) { //这里的判断是否=取决于区间
            const center = start + Math.floor((end - start) / 2);
            if (lower) {
                // 获得第一个符合条件的索引
                if (target <= nums[center]) {
                    end = center - 1; // 为了取得第一个索引, 即使在相等的情况下也更改右侧范围
                } else {
                    start = center + 1;
                }
            } else {
                // 获得最后一个符合条件的索引
                if (target >= nums[center]) {
                    start = center + 1;// 为了取得最后一个索引, 即使在相当情况下也更改左侧范围
                    // 因为相当的时候总会+1, 在最后看结果时需要-1
                } else {
                    end = center - 1;
                }
            }
        }
        if (lower) {
            if (start === nums.length) return -1;
            return nums[start] === target ? start : -1;
        } else {
            // 注意, 这里停下的索引其实在目标的右侧
            // return nums[start - 1] === target ? start - 1 : -1; 
            // 如果用end的话就可以不用-1, 因为在while最后一次执行时end或者没+1或者被-1, 与我们期望的left是一样的
            return nums[end] === target ? end : -1; 
        }
    }

    const leftIndex = binerySearch(nums, target, true);
    const rightIndex = binerySearch(nums, target);
    return [leftIndex, rightIndex];
};

var searchRange = function(nums, target) {
    const binerySearch = isLeft => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isLeft) {
                if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (nums[mid] <= target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        const res = isLeft ? left : right;
        return nums[res] === target ? res : -1;
    }

    const left = binerySearch(true);
    const right = binerySearch();
    return [left, right];
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end