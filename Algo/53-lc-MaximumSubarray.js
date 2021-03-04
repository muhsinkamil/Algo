/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    1. Keep track of maxSum and currSum
    2. Update currSum as looping over the array,
            1. See if the currNum (num[i]) is greater than the sofar currSum and update in currSum
            2. Update maxSum as max of currSum and maxSum
*/

var maxSubArray = function (nums) {
  // Given, the array is not empty
  let currSum = nums[0]
  let maxSum = currSum

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i])
    maxSum = Math.max(currSum, maxSum)
  }

  return maxSum
}

console.log(maxSubArray([0]))
