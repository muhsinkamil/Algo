/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
    1. As anagram has same set of characters, 
        1.Sort the words and store in map to see if this set has already occured.
        2. Map gives constant lookup to see if this 
*/
var groupAnagrams = function (strs) {
  let lookup = new Map()

  for (let word of strs) {
    const sortedWord = word.split("").sort().join("")

    if (lookup.has(sortedWord)) {
      lookup.get(sortedWord).push(word)
    } else {
      lookup.set(sortedWord, [word])
    }
  }

  return [...lookup.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
