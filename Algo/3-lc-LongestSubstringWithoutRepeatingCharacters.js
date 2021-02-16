/*
    Todo: Make a window of non repeating characters and return the max length of window of all times.
    
    DS: SET

    1. Loop over the characters in string and add the characters to "existing" Set
    2. if the character is already in the window, wait till the character is cleared from the window before adding any further
    3. If the character is added to "existing" set, update the maxLength

*/

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0

  let left = 0
  let right = 0
  let existing = new Set()

  while (right < s.length) {
    if (existing.has(s[right])) {
      existing.delete(s[left])
      left++
    } else {
      existing.add(s[right])
      right++
      maxLength = Math.max(maxLength, right - left)
    }
  }

  return maxLength
}
