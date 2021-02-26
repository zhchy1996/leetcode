/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (39.64%)
 * Likes:    3737
 * Dislikes: 0
 * Total Accepted:    339.3K
 * Total Submissions: 855.8K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 * 
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 * 
 * 
 * 示例 4：
 * 
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 * 
 * 
 * 示例 5：
 * 
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0,
        j = 0;
    const index = (nums1.length + nums2.length) / 2
    let res = [];
    let flag = false;
    let len = Math.ceil(index);
    if (index % 1 !== 0) {
        flag = true;
    } else {
        len+=1;
    }
    // if (nums1.length === 0) {
    //     return flag ? nums2[len-1] : (nums2[len - 2] + nums2[len - 1]) / 2
    // }
    // if (nums2.length === 0) {
    //     return flag ? nums1[len-1] : (nums1[len - 2] + nums1[len - 1]) / 2
    // }
    for (let k = 0; k < len; k += 1) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        let num;
        if ((num1 !== undefined && num1 <= num2) || num2 === undefined) {
            num = num1;
            i++;
        } else if (num2 !== undefined || num1 === undefined) {
            num = num2;
            j++;
        }
        if (flag && k === len - 1) {
            res.push(num);
        } else if (!flag && k >= len -2) {
            res.push(num);
        }
    }
    return res.reduce((acc, v) => acc+v, 0)/res.length;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end