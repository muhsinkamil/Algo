/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

/*
    To find: least wt capacity of ship to carry all packages in D days.
    Approach: Binary Search
    Why?
    As we need to find the lower bound in which the weights can be carried, binary search would be apt fit.
    
    low = Max wt among weights. As the ship has to have atleast this capacity to carry this.
    high = sum of all weights so that ship could carry in one day.
    
    To find for D days => find Mid of low and high.
    Iterate over the weights and keep track of days when the capacity is "mid" wt. If the capacity cant be reduced lower than "mid", then thats our solution.

*/
var shipWithinDays = function (weights, D) {
  let low = 0
  let high = 0

  for (let wt of weights) {
    low = Math.max(wt, low)
    high += wt
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2)

    if (canCarry(weights, mid, D)) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}

const canCarry = (weights, capacity, D) => {
  let total = 0
  let days = 1

  for (let wt of weights) {
    total += wt

    if (total > capacity) {
      total = wt
      days++

      if (days > D) {
        return false
      }
    }
  }

  return true
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) // 15
