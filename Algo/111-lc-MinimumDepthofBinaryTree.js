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
 * @return {number}
 */

/*
    1. BFS
    2. Go by level and keep increasing of depth
    3. If at any level, we find leaf node, return depth
    4. else, append left node to q(if any) and right(if any)
*/
var minDepth = function (root) {
  if (!root) {
    return 0
  }

  let q = [root]

  let depth = 0

  while (q.length) {
    n = q.length
    depth++

    for (i = 0; i < n; i++) {
      const node = q.shift()

      if (!node.left && !node.right) {
        return depth
      }

      if (node.left) {
        q.push(node.left)
      }

      if (node.right) {
        q.push(node.right)
      }
    }
  }
}
