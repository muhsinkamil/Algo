/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    1. Approach DP
    2. At any point, what is the max amount that can be robbed without alerting.
    Alert condition: not near houses
    
    3. DP condition: max(prevHouseAmount, currHouseAmount + 2houseBack)
    
    4. Corner: at first point, max is only that house
                at second point, max is max(first and second house)
*/
var rob = function (nums) {
  if (!nums.length) return 0
  if (nums.length < 2) return nums[0]

  let dp = Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  }
  // console.log(dp)
  return dp[nums.length - 1]
}
