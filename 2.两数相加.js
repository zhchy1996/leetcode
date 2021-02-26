/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (39.58%)
 * Likes:    5685
 * Dislikes: 0
 * Total Accepted:    719.7K
 * Total Submissions: 1.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    let flag = 0;
    let res = null;
    let resNext = null;
    while(l1 || l2 || flag) {
        let num = (l1 && l1.val || 0) + (l2 && l2.val || 0) + flag;
        if (num >= 10) {
            num = num % 10;
            flag = 1;
        } else {
            flag = 0;
        }
        if (res === null) {
            res = new ListNode(num);
            resNext = res;
        } else {
            resNext.next = new ListNode(num);
            resNext = resNext.next;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return res;
};

// best solution
// var addTwoNumbers = function(l1, l2) {
//     var List = new ListNode(0);
//     var head = List;
//     var sum = 0;
//     var carry = 0;

//     while(l1!==null||l2!==null||sum>0){

//         if(l1!==null){
//             sum = sum + l1.val;
//             l1 = l1.next;
//         }
//         if(l2!==null){
//             sum = sum + l2.val;
//             l2 = l2.next;
//         }
//         if(sum>=10){
//             carry = 1;
//             sum = sum - 10;
//         }

//         head.next = new ListNode(sum);
//         head = head.next;

//         sum = carry;
//         carry = 0;

//     }

//     return List.next;
// };
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end