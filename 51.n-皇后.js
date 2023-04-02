/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode.cn/problems/n-queens/description/
 *
 * algorithms
 * Hard (74.15%)
 * Likes:    1712
 * Dislikes: 0
 * Total Accepted:    293.8K
 * Total Submissions: 396.2K
 * Testcase Example:  '4'
 *
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 * 
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
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
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // 创建n*n的棋盘
    const board = [];
    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            board[i][j] = '.'
        }
    }
    const res = [];
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
            res.push(board.reduce((acc, v) => {
                acc.push(v.join(''));
                return acc;
            }, []));
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


// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end