/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    1. Have track of maxLadder that we can jump to.
    2. For every jump from currLadder to maxJump, increment count.
    3. Initialise currLadder and maxLadder to nums[0] and count to 1. As we are starting assuming we have currLadder that can go till nums[0]
*/

var jump = function (nums) {
  if (nums.length <= 1 || nums[0] === 0) {
    return 0
  }

  let maxLadder = nums[0]
  let currLadder = maxLadder
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) {
      return count
    }

    maxLadder = Math.max(maxLadder, i + nums[i])

    if (currLadder === i) {
      currLadder = maxLadder
      count++
    }
  }

  return count
}
