/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.44%)
 * Likes:    1643
 * Dislikes: 0
 * Total Accepted:    494.5K
 * Total Submissions: 691.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let p = head;
//     let prev = null
//     while(p) {
//         const tmp = p.next;
//         p.next = prev;
//         prev = p;
//         p = tmp; 
//     }

//     return prev;
// };

const reverseList = head => {
    if (!head || !head.next) return head;
    const last = reverseList(head.next);
    head.next.next = head;
    // 虽然此处将head的next置为null, 但是在下一次循环时会将其改为正确的节点
    head.next = null;
    return last;
}
// @lc code=end

