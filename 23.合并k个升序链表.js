/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (54.34%)
 * Likes:    1186
 * Dislikes: 0
 * Total Accepted:    221.4K
 * Total Submissions: 406.6K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 
 * 示例 2：
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function(lists) {
//     const pArr = [];
//     let leftNum = lists.length;
//     if (leftNum === 0) return null;
//     const res = new ListNode(-1);
//     let resP = res;
//     // init point array
//     for (let i = 0; i < lists.length; i++) {
//         pArr[i] = lists[i];
//         if (!pArr[i]) leftNum--;
//     }

//     while (leftNum > 1) {
//         let min = Number.POSITIVE_INFINITY;
//         let minIdx = -1;

//         for (let j = 0; j < lists.length; j++) {
//             if (pArr[j] && pArr[j].val < min) {
//                 min = pArr[j].val; 
//                 minIdx = j;
//             }
//         }
//         if (minIdx > -1) {
//             pArr[minIdx] = pArr[minIdx].next;
//             if (pArr[minIdx] === null) leftNum--;

//             resP.next = new ListNode(min);
//             resP = resP.next;
//         } else {
//             leftNum = 0;
//             break;
//         }
//     }
//     if (leftNum === 1) {
//         resP.next = pArr.find(v => v !== null);
//     }
//     return res.next || null;
// };

// best
/**
 * 每次将链表两两合并，由于每次合并的时间复杂度为n，而总共需要合并logn次，所以复杂度为nlogn,优于n^2
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0] || null;
    let res = [];
    let temp = lists;

    while(temp.length > 1) {
        res = [];
        for (let i = 0; i < temp.length; i += 2) {
            res.push(mergeTwo(temp[i], temp[i + 1]))
        }
        temp = res;
    }
    
    // 用于将两个链表合并
    function mergeTwo(l1, l2) {
        const res = new ListNode(-1);
        let resp = res;
        while(l1 || l2) {
            if (!l1) {
                resp.next = l2 || null;
                break;
            } else if (!l2) {
                resp.next = l1 || null;
                break;
            }
            if (l1.val < l2.val) {
                resp.next = new ListNode(l1.val);
                resp = resp.next;
                l1 = l1.next;
            } else {
                resp.next = new ListNode(l2.val);
                resp = resp.next;
                l2 = l2.next;
            }
        }
        return res.next;
    }

    return res[0] || null;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end