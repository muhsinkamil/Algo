/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1)

  const intersection = nums2.filter((num) => nums1.has(num))

  return [...new Set(intersection)]
}
