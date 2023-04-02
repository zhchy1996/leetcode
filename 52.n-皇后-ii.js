/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 *
 * https://leetcode.cn/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (82.42%)
 * Likes:    421
 * Dislikes: 0
 * Total Accepted:    116K
 * Total Submissions: 140.8K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 9
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // 创建n*n的棋盘
    const board = [];
    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            board[i][j] = '.'
        }
    }
    let res = 0;
    // 新的皇后能否放在row col上
    const isVaild = (board, row, col) => {
        // 上方是否有皇后
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false; 
        }
        // 左上是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // 右上是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };
    
    // 回溯主体
    const trackBack = (row, board) => {
        if (row === n) {
            res++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isVaild(board, row, col)) {
                board[row][col] = 'Q';
                trackBack(row + 1, board);
                board[row][col] = '.';
            }
        }
    }

    trackBack(0, board);
    return res;
};
// @lc code=end

