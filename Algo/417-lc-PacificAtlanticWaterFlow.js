/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

/*
    1. Straight forward implementation as the question says.
        1. Make two arrays: Pacific and atlantic
        
        2. since first row and first col is nearer to pacific
            1. the first row and first col will always to be true for pacific
            2. Now, to its nearer points see if we can reach these points. When any of first row or first col is reachable, then that point is true for pacific. Similary check to ITS neighbours => DFS
            
        3. since last row and last col is nearer to atlantic
            1. the last row and last col will always to be true for atlantic
            2. Now, to its nearer points see if we can reach these points. When any of last row or last col is reachable, then that point is true for atlantic. Similary check to ITS neighbours => DFS
        
        4. Finally calculate the overlaps and return result
*/
var pacificAtlantic = function (heights) {
  let result = [];

  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return result;
  }

  let rows = heights.length;
  let cols = heights[0].length;

  let pacific = Array(rows)
    .fill()
    .map((row) => Array(cols).fill(false));
  let atlantic = Array(rows)
    .fill()
    .map((row) => Array(cols).fill(false));

  for (let i = 0; i < cols; i++) {
    dfs(0, i, pacific, heights, -1);
    dfs(rows - 1, i, atlantic, heights, -1);
  }

  for (let i = 0; i < rows; i++) {
    dfs(i, 0, pacific, heights, -1);
    dfs(i, cols - 1, atlantic, heights, -1);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
};

function dfs(row, col, ocean, heights, prevValue) {
  if (
    row < 0 ||
    row >= ocean.length ||
    col < 0 ||
    col >= ocean[0].length ||
    ocean[row][col] ||
    heights[row][col] < prevValue
  ) {
    return;
  }

  ocean[row][col] = true;

  dfs(row + 1, col, ocean, heights, heights[row][col]);
  dfs(row - 1, col, ocean, heights, heights[row][col]);
  dfs(row, col + 1, ocean, heights, heights[row][col]);
  dfs(row, col - 1, ocean, heights, heights[row][col]);
}
