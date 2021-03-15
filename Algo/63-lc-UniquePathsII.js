/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
    Approach: DP - see at each point what are the total ways to reach that point
    1. Make 2d array having same dimension as obstacle Grid
    2. Robot can only move right and down.
    3. So at any point, total ways to reach the point = (total ways to reach the point at top(same col) + total ways to reach the point at left(same row))
    4. For obstacle, mark as zero
    5. For first row and first col, there is only to go, so fill with 1(do consider obstacles as 0)
    
    Corner cases:
        1. If obstacle is present on initial pos(0,0), then return 0 right away, as robot cant move.
        2. On first row, if any obstacle present, then robot cant move further on first row. So remaining of that row gets 0
        3. On first col, if any obstacle present, then robot cant move further on first col. So remaining of that col gets 0
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0

  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  let dp = [...Array(m)].map(() => Array(n))

  dp[0][0] = 1

  for (let i = 1; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
}
