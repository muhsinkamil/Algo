/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    1. sort an array
    2. go thru an array, consider this is first elem. see if there is two other elements with which it can form zero.
    3. skip the duplicates.
    4. To find the two other numbers, keep the left and right pointer.
    5. If the total of nums[left] + nums[right] + nums[i] = 0, add to output.
    Skip the duplicates of left and right
    6. else see the diff and move the pointers.
*/

var threeSum = function (nums) {
  const output = []

  if (nums.length < 3) {
    return output
  }

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break
    }

    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1
      let right = nums.length - 1
      while (left < right) {
        const total = nums[i] + nums[left] + nums[right]

        if (total === 0) {
          output.push([nums[i], nums[left], nums[right]])
          left++
          right--

          while (left < right && nums[left] === nums[left - 1]) {
            left++
          }

          while (left < right && nums[right] === nums[right + 1]) {
            right--
          }
        } else if (total < 0) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return output
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
