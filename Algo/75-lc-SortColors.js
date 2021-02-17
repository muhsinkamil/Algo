var sortColors = function (nums) {
  /*
        Todo: Place all 0s at the start, all 2s at the end, all 1s in mid
        
        1. Have three movers -> 
            a. ZerosMover -> Keep track of where the next 0 has to be placed
            b. TwosMover -> Keep track of where the next 2 has to be placed. Starts from the end of array
            c. Runner -> Runs until it meets the twosMover. as beyond that, all would already be in correct place
                Cases:
                1. Runner swaps with zerosMover if it has 0. 
                    a. Move the zerosMover to one pos ahead.
                    b. Move the runner one pos ahead. As the swapped value with zerosMover cannot be two, as the array till then is already processed.
                2. Runner swaps with TwosMover if it has 2. 
                    a. Move the twosMover by one pos. since it starts from end, will move (pos - 1)
                    b. Cannot move the runner as the swapped value can be zero and may need a swap.
                3. Runner Moves ahead if it has 1. As 1 is already in right place.
    */

  let zerosMover = 0
  let runner = 0
  let twosMover = nums.length - 1

  while (runner <= twosMover) {
    if (nums[runner] === 0) {
      ;[nums[runner], nums[zerosMover]] = [nums[zerosMover], nums[runner]]
      runner++
      zerosMover++
    } else if (nums[runner] === 2) {
      ;[nums[runner], nums[twosMover]] = [nums[twosMover], nums[runner]]
      twosMover--
    } else {
      runner++
    }
  }

  return nums
}

console.log(sortColors([0]))
