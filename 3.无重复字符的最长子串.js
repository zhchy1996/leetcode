/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (36.48%)
 * Likes:    5015
 * Dislikes: 0
 * Total Accepted:    842.3K
 * Total Submissions: 2.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: s = ""
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

/**
 * 滑动窗口
 */

// @lc code=start

// first
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     const obj = {};
//     const len = s.length;
//     let pre = 0;
//     let now = 0;
//     for (let i = 0; i < len; i++) {
//         const str = s[i]
//         if (obj[str] === undefined) {
//             obj[str] = i;
//             now ++;
//         } else {
//             if (obj[str] >= i - now) {
//                 pre = Math.max(pre, now);
//                 now = i - obj[str];
//                 obj[str] = i;
//             } else {
//                 obj[str] = i;
//                 now++;
//             }
//         }
//     }
//     return Math.max(pre, now);
// };

// second
// var lengthOfLongestSubstring = function(s) {
//     const len = s.length;
//     let subStr = '';
//     let res = 0;
//     for (let i = 0; i < len; i++) {
//         const str = s[i];
//         const index = subStr.indexOf(str);
//         if (index < 0) {
//             subStr += str;
//         } else {
//             res = Math.max(subStr.length, res);
//             subStr = subStr.slice(index + 1);
//             subStr += str;
//         }
//     }
//     return Math.max(res, subStr.length)
// };

// best solution
// 遍历字符串, 用map记录字符串出现的位置, 一旦出现重复字符
// 就计算出当前子串长度, 并更新字符位置
var lengthOfLongestSubstring = function(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end