/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (45.14%)
 * Likes:    2428
 * Dislikes: 0
 * Total Accepted:    407.3K
 * Total Submissions: 902.1K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let right = 0;
    const needs = new Map();
    const window = new Map();
    let resIndex = '';
    let resLen = Infinity;
    let valid = 0;

    for (let n of t) {
        if (needs.has(n)) {
            needs.set(n, needs.get(n) + 1);
        } else {
            needs.set(n, 1);
        }
    }

    // 主循环, 左闭右开
    while (right < s.length) {
        // 先取值再加
        let c = s[right];
        right++;

        // 进行窗口记录处理
        if (needs.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1);
            } else {
                window.set(c, 1);
            }

            if (window.get(c) === needs.get(c)) valid++;
        }

        // 判断是否需要缩小窗口
        // while的好处是在判断的同时, 也能完成缩小窗口的逻辑
        while (valid === needs.size) {
            // 处理结果
            const curLen = right - left;
            if (curLen < resLen) {
                resIndex = left;
                resLen = curLen;
            }

            // 这里也是先取值再加, 如果这个值符合条件, 则直接被丢了出去, 循环也不会继续
            // 后面也没有涉及到left的处理, 也就没关系
            let d = s[left];
            left ++;

            if (needs.has(d)) {
                // 这里判断相等的时候再-1, 是因为 window中的数量可能超过needs的数量
                // 此时即使移除一个, 也是合法的字符串
                if (window.get(d) === needs.get(d)) valid--;
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return resLen === Infinity ? '' : s.substr(resIndex, resLen);
};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end