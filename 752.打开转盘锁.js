/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 *
 * https://leetcode.cn/problems/open-the-lock/description/
 *
 * algorithms
 * Medium (52.80%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    115.6K
 * Total Submissions: 219K
 * Testcase Example:  '["0201","0101","0102","1212","2002"]\n"0202"'
 *
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8',
 * '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 
 * 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"],
 * target = "8888"
 * 输出：-1
 * 解释：无法旋转到目标数字且不被锁定。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= deadends.length <= 500
 * deadends[i].length == 4
 * target.length == 4
 * target 不在 deadends 之中
 * target 和 deadends[i] 仅由若干位数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let step = 0;
    const visited = new Set();
    // 将特定的一位向上拨
    const rollUp = (now, pos) => {
        const arr = now.split('');
        if (arr[pos] === '0') {
            arr[pos] = '9'
        } else {
            arr[pos] = parseInt(arr[pos]) - 1;
        }  
        return arr.join('')
    }

    // 将特定的一位向下拨
    const rollDown = (now, pos) => {
        const arr = now.split('');
        if (arr[pos] === '9') {
            arr[pos] = '0'
        } else {
            arr[pos] = parseInt(arr[pos]) + 1;
        }  
        return arr.join('')
    }

    const q = [];
    q.push('0000');

    while(q.length) {
        const n = q.length;
        for (let i = 0; i < n; i++) {
            const cur = q.shift();
            // 判断是否遇到永锁组合
            if (deadends.includes(cur)) continue; 
            // 判断是否符合目标
            if (cur === target) {
                return step;
            }

            // 生成接下来可能的选择
            for (let j = 0; j < 4; j++) {
                let up = rollUp(cur, j);
                if (!visited.has(up)) {
                    q.push(up);
                    visited.add(up);
                }

                let down = rollDown(cur, j);
                if (!visited.has(down)) {
                    q.push(down);
                    visited.add(down);
                }
            }
        }
        // 增加步数计数
        step++;
    }

    return -1;
};

var openLock = function(deadends, target) {
    let step = 0;
    const visited = new Set();
    // 将特定的一位向上拨
    const rollUp = (now, pos) => {
        const arr = now.split('');
        if (arr[pos] === '0') {
            arr[pos] = '9'
        } else {
            arr[pos] = parseInt(arr[pos]) - 1;
        }  
        return arr.join('')
    }

    // 将特定的一位向下拨
    const rollDown = (now, pos) => {
        const arr = now.split('');
        if (arr[pos] === '9') {
            arr[pos] = '0'
        } else {
            arr[pos] = parseInt(arr[pos]) + 1;
        }  
        return arr.join('')
    }

    let q1 = new Set();
    let q2 = new Set();
    q1.add('0000');
    q2.add(target)

    while(q1.size && q2.size) {
        const temp = new Set();

        for (let cur of q1) {
            // 判断是否遇到永锁组合
            if (deadends.includes(cur)) continue; 
            // 判断是否符合目标
            if (q2.has(cur)) {
                return step;
            }

            // 需要注意的是这种写法, 记录访问过的节点要写在这里
            visited.add(cur);

            // 生成接下来可能的选择
            for (let j = 0; j < 4; j++) {
                let up = rollUp(cur, j);
                if (!visited.has(up)) {
                    temp.add(up);
                    // 因为如果添加过就算访问过的话, 可能会出现q1添加了, 但是q2没有添加, 那么也就碰不到了
                    // 所以这种写法的访问过标记要真实的访问过
                    // visited.add(up);
                }

                let down = rollDown(cur, j);
                if (!visited.has(down)) {
                    temp.add(down);
                    // visited.add(down);
                }
            }
        }
        // 增加步数计数
        step++;

        q1 = q2;
        q2 = temp;
    }

    return -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = openLock;
// @after-stub-for-debug-end