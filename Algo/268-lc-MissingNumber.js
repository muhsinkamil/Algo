var missingNumber = function (nums) {
  /*
    APPROACH 1:
        1. a ^ a = 0
        2. since numbers are in range 0 - N
        3. xor with mask as nums.length (N) and indices and values.
        4. so values and indices cancel out.
        5. corner case of N cancelling out by mask(N)
    
    APPROACH 2:
        missing number in series of N numbers = (n(n+1) // 2) - (sum(nums))
    */

  let mask = nums.length
  for (let i = 0; i < nums.length; i++) {
    mask = mask ^ i ^ nums[i]
  }

  return mask
}
