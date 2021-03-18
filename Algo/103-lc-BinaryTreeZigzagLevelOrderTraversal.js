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
 * @return {number[][]}
 */

/*
    1. S1 holds all odd levels
    2. S2 holds all even levels
    3. For odd levels, adding left child first to s2, so when popping, right childs come first
    4. For even levels, adding right child first to s1, so when popping, left childs come first
*/

var zigzagLevelOrder = function (root) {
  if (!root) return []

  let output = []
  let stackOne = [root]
  let stackTwo = []

  while (stackOne.length || stackTwo.length) {
    let level = []

    while (stackOne.length) {
      const node = stackOne.pop()
      level.push(node.val)

      if (node.left) {
        stackTwo.push(node.left)
      }
      if (node.right) {
        stackTwo.push(node.right)
      }
    }

    output.push(level)
    level = []

    while (stackTwo.length) {
      const node = stackTwo.pop()
      level.push(node.val)

      if (node.right) {
        stackOne.push(node.right)
      }
      if (node.left) {
        stackOne.push(node.left)
      }
    }

    if (level.length) {
      output.push(level)
    }
  }

  return output
}
