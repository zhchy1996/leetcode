/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.56%)
 * Likes:    3132
 * Dislikes: 0
 * Total Accepted:    665.7K
 * Total Submissions: 858.4K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯法
var generateParenthesis = function(n) {
    const genChoices = (arr) => {
        if (arr.lenght === n * 2) return [];
        // if (arr.length === 0) return ['('];
        let lc = 0;
        let rc = 0;
        for (let el of arr) {
            switch(el) {
                case '(':
                    lc++;
                    break;
                case ')':
                    rc++;
                    break;
            }
        }
        if (lc === rc) {
            return '(';
        } else if (lc === n) {
            return ')';
        } else {
            return '()';
        }
    }

    const res = [];

    const trackBack = (arr) => {
        if (arr.length === n * 2) {
            res.push(arr.join(''));
            return;
        }
        const choices = genChoices(arr);
        for (let flag of choices) {
            arr.push(flag);
            trackBack(arr);
            arr.pop();
        }
    }
    trackBack([]);
    return res;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateParenthesis;
// @after-stub-for-debug-end