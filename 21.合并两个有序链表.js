/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.38%)
 * Likes:    1582
 * Dislikes: 0
 * Total Accepted:    489.8K
 * Total Submissions: 747.8K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
  /** 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// my first
// var mergeTwoLists = function(l1, l2) {
//     let left = l1,
//         right = l2;
//     if (!l1) return l2;
//     if (!l2) return l1;
//     let res;
//     let resp;
//     while (left || right) {
//         if (!left) {
//             resp.next = right;
//             break;
//         }
//         if (!right) {
//             resp.next = left;
//             break;
//         }
//         if (left.val < right.val) {
//             if (!res) {
//                 res = new ListNode(left.val);
//                 resp = res;
//             } else {
//                 resp.next = new ListNode(left.val);
//                 resp = resp.next;
//             }
//             left = left.next;
//         } else {
//             if (!res) {
//                 res = new ListNode(right.val);
//                 resp = res;
//             } else {
//                 resp.next = new ListNode(right.val);
//                 resp = resp.next;
//             }
//             right = right.next;
//         }
//     }
//     return res;
// };

// best solution
var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end