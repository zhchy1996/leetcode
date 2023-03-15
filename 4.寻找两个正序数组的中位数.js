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
// first
// var findMedianSortedArrays = function(nums1, nums2) {
//     let i = 0,
//         j = 0;
//     const index = (nums1.length + nums2.length) / 2
//     let res = [];
//     let flag = false;
//     let len = Math.ceil(index);
//     if (index % 1 !== 0) {
//         flag = true;
//     } else {
//         len+=1;
//     }
//     for (let k = 0; k < len; k += 1) {
//         const num1 = nums1[i];
//         const num2 = nums2[j];
//         let num;
//         if ((num1 !== undefined && num1 <= num2) || num2 === undefined) {
//             num = num1;
//             i++;
//         } else if (num2 !== undefined || num1 === undefined) {
//             num = num2;
//             j++;
//         }
//         if (flag && k === len - 1) {
//             res.push(num);
//         } else if (!flag && k >= len -2) {
//             res.push(num);
//         }
//     }
//     return res.reduce((acc, v) => acc+v, 0)/res.length;
// };

//second, 查找第k小的数字
// var findMedianSortedArrays = function(nums1, nums2) {
//   const lenSum = nums1.length + nums2.length;

//   if (lenSum % 2 === 0) {
//     const mid = lenSum / 2;
//     return (findKNum(nums1, nums2, mid) + findKNum(nums1, nums2, mid + 1)) / 2;
//   } else {
//     return findKNum(nums1, nums2, Math.ceil(lenSum / 2));
//   }

//   function findknum(nums1, nums2, k) {
//     let p1 = 0,
//         p2 = 0;
//     const len1 = nums1.length;
//     const len2 = nums2.length;
//     while(k >= 1) {
//       const half  = math.floor(k / 2);

//       if (p1 === len1) {
//         return nums2[p2 + k - 1];
//       }

//       if (p2 === len2) {
//         return nums1[p1 + k - 1];
//       }

//       if (k === 1) {
//         return math.min(nums1[p1], nums2[p2]);
//       }

//       const newp1 = math.min(len1, p1 + half) - 1;
//       const newp2 = math.min(len2, p2 + half) - 1;
//       const num1 = nums1[newp1];
//       const num2 = nums2[newp2];
//       if (num1 <= num2) {
//         k = k - newp1 + p1 - 1;
//         p1 = newp1 + 1;
//       } else {
//         k = k - newp2 + p2 - 1;
//         p2 = newp2 + 1;
//       }
//     }

//     return null;
//   }
// }

// best solution
// var findMedianSortedArrays = function(nums1, nums2) {
//     if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
//     let x = nums1.length
//     let y = nums2.length
//     // 从nums1开始查找
//     let low = 0, high = x
//     while(low <= high) {
//         // 这种写法就相当于Math.floor((high+low)/2)
//         const partitionX = (high + low) >> 1
//         const partitionY = ((x + y + 1) >> 1) - partitionX

//         const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
//         const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

//         const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
//         const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY]

//         if(maxX <= minY && maxY <= minX) {
//             const lowMax = Math.max(maxX, maxY)
//             if( (x + y) % 2 == 1)
//                 return lowMax
//             return (lowMax + Math.min(minX, minY)) / 2
//         } else if(maxX < minY) {
//             low = partitionX + 1
//         } else
//             high = partitionX - 1
//     }
// };

// best solution mine
// var findMedianSortedArrays = function (nums1, nums2) {
//     const len1 = nums1.length,
//         len2 = nums2.length;
//     if (len1 > len2) return findMedianSortedArrays(nums2, nums1);
//     let left = 0,
//         right = len1 ;

//     while (left <= right) {
//         const p1 = Math.floor((left + right) / 2);
//         const p2 = Math.floor((len1 + len2 + 1) / 2) - p1;
//         const leftVal1 = p1 === 0 ? Number.NEGATIVE_INFINITY : nums1[p1 - 1];
//         const rightVal1 = p1 === len1 ? Number.POSITIVE_INFINITY : nums1[p1];

//         const leftVal2 = p2 === 0 ? Number.NEGATIVE_INFINITY : nums2[p2 - 1];
//         const rightVal2 = p2 === len2 ? Number.POSITIVE_INFINITY : nums2[p2];

//         if (leftVal1 <= rightVal2 && leftVal2 <= rightVal1) {
//             const leftMax = Math.max(leftVal1, leftVal2);
//             if ((len1 + len2) % 2 === 1) {
//                 return leftMax;
//             } else {
//                 return (leftMax + Math.min(rightVal1, rightVal2)) / 2;
//             }
//         } else if (leftVal1 > rightVal2) {
//             right = p1 - 1;
//         } else {
//             left = p1 + 1;
//         }
//     }
// };


// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end
