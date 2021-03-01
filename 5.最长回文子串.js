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
var longestPalindrome = function(s) {
    const strArr = s.split('');
    const len = strArr.length;
    const searchedArr = [];
    let res = [];
    let tmp = [];
    for(let i = 0; i < len;i++) {
        const target = strArr[i];
        if (target === searchedArr[searchedArr.length - 1]) {
            res.push(target);
            res.unshift(target);
            for (let j = i + 1; j < len; j++) {
                if (strArr[j] === searchedArr[searchedArr.length - j + i - 1]) {
                    tmp.push(strArr[j]);
                    tmp.unshift(strArr[j]);
                } else {
                    if (tmp.length > res.length) {
                        res = tmp;
                        tmp = [];
                    } else {
                        tmp = [];
                    }
                    break;
                }
            }
        } else if (target === searchedArr[searchedArr.length - 2]) {
            tmp.push(searchedArr[searchedArr.length - 2]);
            tmp.push(searchedArr[searchedArr.length - 1]);
            tmp.push(target);
            if (i + 1 >= len) {
                if (tmp.length > res.length) {
                    res = tmp;
                    tmp = [];
                }
                return res.join('');
            }
            for (let j = i + 1; j < len; j++) {
                if (strArr[j] === searchedArr[searchedArr.length - j + i - 1]) {
                    tmp.push(strArr[j]);
                    tmp.unshift(strArr[j]);
                } else {
                    if (tmp.length > res.length) {
                        res = tmp;
                        tmp = [];
                    } else {
                        tmp = [];
                    }
                    break;
                }
            }

        }
        searchedArr.push(target);
    }
    if (res.length === 0) {
        return strArr[0];
    }
    return res.join('');
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end