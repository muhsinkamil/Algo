/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
    1. Whenever we see a land we add 4 to perimeter
    2. When the piece adjacent to it, is also a land, the perimeter decreases.
        But How ?
            1. when the piece adjancent to it is land, on the same row, then the perimeter decreases by 2(removing left of curr land and right of the adj land)
            2. when the piece adjacent to it is land, on the same col, then the perimeter decreases by 2(removing top of curr land and bottom of the adj land)
*/

var islandPerimeter = function (grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col]) {
        perimeter += 4;

        if (row > 0 && grid[row - 1][col] === 1) {
          perimeter -= 2;
        }

        if (col > 0 && grid[row][col - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};
