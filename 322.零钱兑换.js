/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode.cn/problems/coin-change/description/
 *
 * algorithms
 * Medium (46.35%)
 * Likes:    2366
 * Dislikes: 0
 * Total Accepted:    603.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * 示例 2：
 * 
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const map = {};
    const dp = (coins, amount) => {
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        if (map[amount]) return map[amount];
        let res = Infinity;

        for(coin of coins) {
            const sub = dp(coins, amount - coin);
            if (sub === -1) continue;
            res = Math.min(res, sub + 1);
        }

        map[amount] = res === Infinity ? -1 : res;
        return map[amount]
    }

    return dp(coins, amount);
};

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end