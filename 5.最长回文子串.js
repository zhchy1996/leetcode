/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.17%)
 * Likes:    3258
 * Dislikes: 0
 * Total Accepted:    489.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// n^2
// var longestPalindrome = function(s) {
//     const strArr = s.split('');
//     const {length} = strArr;
//     let res = [];
//     let temp = [];
//     for (let i = 0; i < length; i ++) {
//         temp = [];
//         for (let j = i; j < length; j++) {
//             temp.push(strArr[j]);
//             if (temp.join('') ===temp.slice().reverse().join('')) {
//                 if (res.length < temp.length)  res = temp.slice();
//             };
//         }
//     }
//     return res.join('');
// };

// 动态规划写法
var longestPalindrome = function(s) {
    
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end