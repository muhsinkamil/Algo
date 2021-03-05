/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
    1. Transpose
    2. Swap cols
*/

var rotate = function (matrix) {
  // Transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === j || i > j) continue
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  //Swap cols
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix[0].length / 2); j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix[0].length - 1 - j]
      matrix[i][matrix[0].length - j - 1] = temp
    }
  }

  return matrix
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
