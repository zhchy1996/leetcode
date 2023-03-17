/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (64.11%)
 * Likes:    691
 * Dislikes: 0
 * Total Accepted:    203.9K
 * Total Submissions: 318K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 思路其实很简单, 创建两个链表, 一个存小于x的, 一个存大于x的, 最后一组合
var partition = function(head, x) {
    const res1 = new ListNode(-1);
    const res2 = new ListNode(-1);
    let p1 = res1;
    let p2 = res2;
    let p = head;
    while(p) {
        if (p.val < x) {
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next
        }
        const cache = p.next;
        p.next = null;
        p = cache;
    }
    p1.next = res2.next;
    return res1.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end