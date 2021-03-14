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

/*
    1. BFS => Go over each level.
    2. Push only the last element in each level.
*/
var rightSideView = function (root) {
  if (!root) return []

  let output = []
  let q = [root]

  while (q.length) {
    const n = q.length

    for (let i = 0; i < n; i++) {
      const node = q.shift()

      if (i === n - 1) {
        output.push(node.val)
      }

      if (node.left) {
        q.push(node.left)
      }

      if (node.right) {
        q.push(node.right)
      }
    }
  }

  return output
}
