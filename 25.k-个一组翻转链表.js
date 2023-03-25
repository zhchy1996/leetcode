/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (64.21%)
 * Likes:    978
 * Dislikes: 0
 * Total Accepted:    148.3K
 * Total Submissions: 230.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 1
 * 输出：[1,2,3,4,5]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：head = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 列表中节点的数量在范围 sz 内
 * 1 
 * 0 
 * 1 
 * 
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
 * @param {number} k
 * @return {ListNode}
 */
// 迭代解法
// var reverseKGroup = function(head, k) {
//     let count = 1;
//     let p = head;
//     let q = head;

//     while(q) {
//         q = q.next;
//         count++;
//         if (count === 3) {
//             reverseList(p, q);
//             count = 0;
//         }
//     }


//     function reverseList(head, tail) {
//         let prev = head;
//         let next = head.next;
//         while(next !== tail) {
//             prev.next = next.next;
//             next.next = prev;
//             prev = prev.next;
//             next = prev.next;
//         }
//         return [tail, head];
//     }

//     return res;
// };


// 反转从a到b的链表, 注意, 这个方法是左闭右开的
const reverse = (a, b) => {
    let pre = null;
    let cur = a;
    let after = null;
    while(cur !== b) {
        after = cur.next;
        cur.next = pre;
        pre = cur;
        cur = after;
    }
    return pre;
}
const reverseKGroup = (head, k) => {
    let a = head;
    let b = head;
    for (let i = 0; i < k; i++) {
        // 此处是b = b.next前判断, 所以如果剩余数量刚好等于k也是能继续执行的
        if (b === null) return head;
    // 此处保证的是左闭右开
        b = b.next;
    }
    const res = reverse(a, b);
    // 因为左闭右开所以这里传入b即可
    a.next = reverseKGroup(b, k);
    return res;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end