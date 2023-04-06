/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode.cn/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (44.38%)
 * Likes:    903
 * Dislikes: 0
 * Total Accepted:    255.4K
 * Total Submissions: 575.3K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0;
    let right = 0;
    let valid = 0;
    const needs = new Map();
    const window = new Map();
    for (s of s1) {
        if (needs.has(s)) {
            needs.set(s, needs.get(s) + 1);
        } else {
            needs.set(s, 1);
        }
    }
    
    while(right < s2.length) {
        const c = s2[right];
        right++;
        
        if (needs.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1);
            } else {
                window.set(c, 1);
            }

            if (window.get(c) === needs.get(c)) valid++;
        }

        while (valid === needs.size) {
            if (right - left === s1.length) return true;

            const d = s2[left];
            left++;

            if (needs.has(d)) {
                if(needs.get(d) === window.get(d)) valid--;
                window.set(d, window.get(d) - 1);
            }
        }
    }

    return false;
};
// @lc code=end

