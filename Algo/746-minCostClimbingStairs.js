/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [cost[0], cost[1]];

  const n = cost.length;

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};
