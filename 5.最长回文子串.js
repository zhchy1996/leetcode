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
/**
 * 用s[i][j]表示从第i个字符到第j个字符的字符串，如果
 */
var longestPalindrome = function(s) {
    const len = s.length;
    // 构造 len * len 矩阵，用来记录回文串情况
    const matrix = new Array(len);
    let res = '';
    for (let i = 0; i < len; i ++) {
        matrix[i] = new Array(len);
    }

    for (let l = 0; l < len; l++) {
        for(let i = 0; i + l < len; i ++) {
            const j = i + l;
            if (l === 0) {
                matrix[i][j] = true;
            } else if (l === 1) {
                matrix[i][j] = s[i] === s[j];
            } else {
                // 字符串是回文的条件：s[i] === s[j] 并且起子串也是回文
                // 由于需要依赖子串，所以我们可以从子串开始判断，所以最外层循环是子串长度，从小到大即可
                matrix[i][j] = s[i] === s[j] && matrix[i + 1][j - 1];
            }

            if (matrix[i][j] && l + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};

// 中心扩展法
var longestPalindrome = function(s) {
    let start = 0,
        end = 0;
    const len = s.length;

    if (s.length === 0) return '';

    for (let k = 0; k < len; k ++) {
        const len1 = expand(k, k);
        const len2 = expand(k, k + 1);
        const maxLen = Math.max(len1, len2);
        if (maxLen > end - start + 1) {
            start = k - Math.floor((maxLen - 1) / 2);
            end = k + Math.floor(maxLen / 2);
        }
        
    }

    function expand(i, j) {
        while(i > -1 && j < len && s[i] == s[j]) {
            i--;
            j++;
        }
        return j - i - 1;
    }

    return s.substring(start, end + 1);
};


// 双指针解法
var longestPalindrome = function(s) {
    let longest = '';
    const expend = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }

        return s.substring(l +1, r);
    }

    for (let i = 0; i < s.length; i++) {
        const str1 = expend(i, i);
        const str2 = expend(i, i + 1);
        if (str1.length > longest.length) longest = str1;
        if (str2.length > longest.length) longest = str2;
    }

    return longest;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end