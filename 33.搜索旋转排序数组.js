/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (43.83%)
 * Likes:    2535
 * Dislikes: 0
 * Total Accepted:    701.9K
 * Total Submissions: 1.6M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始
 * 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 也是使用二分查找, 只是需要多一个判断, 通过判断低位是否小于高位来判断此区间是否有序
// 然后只根据有序的部分做判断
var search = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    // 确认范围内是否存在目标值
    const confirm = (l, r) => {
        if (target <= nums[r] && target >= nums[l]) {
            return true;
        } else {
            return false;
        }
    }
    while (i < j) {
        const center = Math.floor((i + j)/2);
        // 这个等号是必须的, 只有这样才能在区间缩短到1时进入, 题目中也强调没有重复数字
        if (nums[i] <= nums[center]) {
            if (confirm(i, center)) {
                j = center;
            } else {
                i = center + 1;
            }
        } else {
            if (confirm(center, j)) {
                i = center;
            } else {
                j =  center - 1;
            }
        }
    }
    if (target === nums[i]) return i;
    return -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end