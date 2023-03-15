/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (58.04%)
 * Likes:    2357
 * Dislikes: 0
 * Total Accepted:    654.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//     const map = {
//         2: 'abc',
//         3: 'def',
//         4: 'ghi',
//         5: 'jkl',
//         6: 'mno',
//         7: 'pqrs',
//         8: 'tuv',
//         9: 'wxyz'
//     }
//     let res = [];

//     const add = (arr, dig) => {
//         const res = [];
//         if (arr.length === 0) {
//             for(let s of map[dig]) {
//                 res.push(s);
//             }
//         } else {
//             for(let i of arr) {
//                 for (let s of map[dig]) {
//                     res.push(i + s);
//                 }
//             }
//         }
//         return res;
//     }

//     for (let dig of digits) {
//         res = add(res, dig);
//     }

//     return res;
// };


// 使用回溯法, 类似的题可看46
var letterCombinations = function(digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const res = [];
    const add = (index, str) => {
        if (index === digits.length) {
            res.push(str);
        } else {
            const ph = map[digits[index]];
            for (let i of ph) add(index + 1, str+i);
        }
    };
    if (digits.length === 0) return res;
    add(0, '');
    return res;
}
// @lc code=end

