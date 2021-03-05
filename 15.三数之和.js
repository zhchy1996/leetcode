/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (31.04%)
 * Likes:    3003
 * Dislikes: 0
 * Total Accepted:    427.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     const newNums = [];
//     const countObj = {};
//     for (let i = 0; i < nums.length; i ++) {
//         const now = nums[i];
//         const count = countObj[now];
//         if(!count) {
//             newNums.push(now);
//             countObj[now] = 1;
//         } else if (count < 3) {
//             newNums.push(now);
//             countObj[now]++;
//         }
//     }
//     const numObj = newNums.reduce((acc, v, i) => {
//         if (acc[v]) {
//             if (acc[v].index.length === 3) return acc;
//             acc[v].index.push(i);
//         } else {
//             acc[v] = {};
//             acc[v].index = [i];
//             acc[v].used = [];
//         }
//         return acc;
//     }, {});
    
//     const res = [];
//     const { length } = newNums;
//     for (let i = 0; i < length; i++) {
//         const first = newNums[i];
//         for(let j = i + 1; j < length; j++) {
//             const second = newNums[j];
//             const target = 0 - first - second;
//             const objVal = numObj[target] && numObj[target].index;
//             const findVal = objVal && objVal.findIndex((v) => v > i && v > j);
//             if (findVal > -1
//                     && numObj[target].used.indexOf(first) === -1
//                     && numObj[target].used.indexOf(second) === -1
//                 ) {
//                 res.push([first, second, target]);
//                 numObj[first].used.push(second, target);
//                 numObj[second].used.push(first, target);
//                 numObj[target].used.push(second, first);
//             }
//         }
//     }
//     return res;
// };

// best
// function threeSum(nums) {
// 	const results = []

// 	// obviously irrelevant if we don't have at least 3 numbers to play with!
// 	if (nums.length < 3) return results

// 	// having the numbers in ascending order will make this problem much easier.
// 	// also, knowing the overall problem  will take at least O(N^2) time, we can
// 	// afford the O(NlogN) sort operation
// 	nums = nums.sort((a, b) => a - b)

//     // if the question asks us for a custom target, we can control it here
// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		// `i` represents the "left" most number in our sorted set.
// 		// once this number hits 0, there's no need to go further since
// 		// positive numbers cannot sum to a negative number
// 		if (nums[i] > target) break

// 		// we don't want repeats, so skip numbers we've already seen
// 		if (i > 0 && nums[i] === nums[i - 1]) continue

// 		// `j` represents the "middle" element between `i` and `k`.
// 		// we will increment this up through the array while `i` and `k`
// 		// are anchored to their positions. we will decrement `k` for
// 		// for each pass through the array, and finally increment `i`
// 		// once `j` and `k` meet.
// 		let j = i + 1

// 		// `k` represents the "right" most element
// 		let k = nums.length - 1
		
// 		// to summarize our setup, we have `i` that starts at the beginning,
// 		// `k` that starts at the end, and `j` that races in between the two.
// 		//
// 		// note that `i` is controlled by our outer for-loop and will move the slowest.
// 		// in the meantime, `j` and `k` will take turns inching towards each other depending
// 		// on some logic we'll set up below. once they collide, `i` will be incremented up
// 		// and we'll repeat the process.

// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			// if we find the target sum, increment `j` and decrement `k` for
// 			// other potential combos where `i` is the anchor
// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				// this is important! we need to continue to increment `j` and decrement `k`
// 				// as long as those values are duplicated. in other words, we wanna skip values
// 				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
// 				// [[-2,0,2], [-2,0,2]].
// 				//
// 				// (i'm not a fan of this part because we're doing a while loop as we're
// 				// already inside of another while loop...)
// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--

// 				// finally, we need to actually move `j` forward and `k` backward to the
// 				// next unique elements. the previous while loops will not handle this.
// 				j++
// 				k--

// 			// if the sum is too small, increment `j` to get closer to the target
// 			} else if (sum < target) {
// 				j++

// 			// if the sum is too large, decrement `k` to get closer to the target
// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}

// 	return results
// };

// best mine
/**
 * 先把数组从小到大排序，由于此问题最优解时间复杂度为O(n^2)所以使用O(nlongn)的排序算法是可以接受的
 * 每次查找的时候先定一个base也就是i的位置，然后再创建两个指针从i+1和length-1查找target，由于target是固定的，
 * 所以当sum大于target时我们只需要将k向后移动一位，这样sum就会变小，反之同理，然后将i从头移动到length-2即可
 * 还有一个问题就是重复问题，我们每次移动base的时候判断一下当前base是否等于上一个这样可避免第一个数字重复带来的结果重复
 * 而且当sum===target时我们也应该判断j的后一位是否等于当前j，这样就能避免次位带来的重复，也能优化算法
 * k也同理，不过k不处理也可以，因为j不同了，所以k不处理不会重复，不过加这一行可以带来40%的时间击败
 */
function threeSum(nums) {
    const sortedNums = nums.sort((a, b) => (a - b));
    const {length} = sortedNums;
    const target = 0;
    const res = [];
    for (let i = 0; i < length-2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        const base = sortedNums[i];
        let j = i + 1,
            k = length - 1;
        while(j < k) {
            const sum = base + sortedNums[j] + sortedNums[k];
            if (sum === target) {
                res.push([base, sortedNums[j], sortedNums[k]]);
                while(sortedNums[j] === sortedNums[j+1])j++;
                // 这行不影响通过，不过可以优化性能
                while(sortedNums[k] === sortedNums[k-1])k--;
                j++;
                k--;
            } else if (sum > target) {
                k--;
            } else if (sum < target) {
                j++;
            }
        }
    }
    return res;
};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end