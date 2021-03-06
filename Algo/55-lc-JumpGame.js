/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    1. Make a target as last index
    2. Track the jump as (index + val)
    3. Update target if target is reachable over looping over the array
    4. If target becomes first index at the end of loop, then we can reach end. else false
*/

var canJump = function (nums) {
  let target = nums.length - 1

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= target) {
      target = i
    }
  }

  return target === 0
}
