/**
 * @param {number[]} height
 * @return {number}
 */

/* 
    1. Have two pointers, left and right
    2. Move the pointer whose value is lowest of the two, hence optimising to maxArea
    3. Keep track of maxArea across the way.
    4. Finish the loop as left meets the right pointer
*/

var maxArea = function (height) {
  var left = 0
  var right = height.length - 1
  var maxArea = 0

  while (left < right) {
    const currArea = Math.min(height[left], height[right]) * (right - left)
    maxArea = Math.max(maxArea, currArea)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
