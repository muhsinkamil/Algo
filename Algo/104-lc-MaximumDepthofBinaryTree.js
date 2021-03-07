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
    1. Solve by recursion.
    2. Base case: if no element, return height as 0
    3. at every node, maxHeight = max(height(left), height(right))
    4. On returning to parent node including itself, so adding 1
*/

var maxDepth = function (root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
