/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode.cn/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.40%)
 * Likes:    624
 * Dislikes: 0
 * Total Accepted:    528.5K
 * Total Submissions: 796.2K
 * Testcase Example:  '2'
 *
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * 
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 
 * 
 * 给定 n ，请计算 F(n) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const map = {};
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (map[n]) return map[n];
    const res = fib(n - 1) + fib(n - 2)
    map[n] = res;
    return res; 
};

var fib = function(N) {
    if (N === 0) return 0;
    let dp = [];
    // base case
    dp[0] = 0; dp[1] = 1;
    // 状态转移
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[N];
};

var fib = function(n) {
    if (n === 0 || n === 1) return n;
    let n_1 = 1;
    let n_2 = 0;
    for (let i = 2; i <= n; i++) {
        let n_i = n_1 + n_2;
        n_2 = n_1;
        n_1 = n_i
    }
    return n_1;
}
// @lc code=end

