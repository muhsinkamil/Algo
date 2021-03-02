/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    1. Using binary search,
        1. if the mid is target, return it.
        2. find if the left of mid is sorted => 
            1. if the target lies in between them, bring high to mid - 1
            2. Move the pointer to mid + 1, since this space does not contain our target
        3. This may be sorted or may not be sorted, not a problem
            1. If the target lies between nums[mid] to nums[high], move the low to mid + 1
            2. else move the high to mid - 1
        
*/

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    console.log(mid)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
