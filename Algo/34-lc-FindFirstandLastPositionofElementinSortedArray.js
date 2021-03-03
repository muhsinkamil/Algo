/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    1. Since the array is sorted, good to go for binary search
    2. For first occurence, make the right pointer go out of bounds in the way of finding the target. Limit the space to right and find the first occurence. Update "first" if target is found along the way.
    3. For last Occurence, make the left pointer go out of bounds in the way of finding the target. Update "last" if target is found.
*/

var searchRange = function (nums, target) {
  let result = []

  result[0] = firstOccurence(nums, target)
  result[1] = lastOccurence(nums, target)

  return result
}

const firstOccurence = (nums, target) => {
  let first = -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }

    if (nums[mid] === target) {
      first = mid
    }
  }

  return first
}

const lastOccurence = (nums, target) => {
  let last = -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }

    if (nums[mid] === target) {
      last = mid
    }
  }

  return last
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
