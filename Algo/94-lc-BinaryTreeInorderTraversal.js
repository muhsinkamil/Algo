/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = []
  let output = []
  let current = root

  while (current || stack.length) {
    if (current) {
      stack.push(current)
      current = current.left // go left
    } else {
      const node = stack.pop() // now there is no left
      output.push(node.val) // add to output, before going to right
      current = node.right // now go right
    }
  }

  return output
}
