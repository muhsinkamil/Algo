/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

/*
  1. If the number within bounds, window becomes the (end - start + 1)
  2. If the number is outside the bounds, reset the window to zero and start to next of end
  3. If the number is less than the min bound, window remains the same

  Idea from =>  Coding Decoded Youtube Channel
*/
var numSubarrayBoundedMax = function (nums, left, right) {
  let result = 0;
  let start = 0;
  let end = 0;
  let window = 0;

  while (end < nums.length) {
    if (nums[end] >= left && nums[end] <= right) {
      window = end - start + 1;
    }

    if (nums[end] > right) {
      window = 0;
      start = end + 1;
    }

    result += window;
    end++;
  }

  return result;
};
