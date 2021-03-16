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
    1. If no root, return [] right away.
    2. start from root and push to stack.
    3. For preorder, push the node to output.
    4. Push right first, then left first.
    5. Why right first ? because we want to go left after our root. 
        So popping from stack will give left now as right is pushed first.
*/
var preorderTraversal = function (root) {
  if (!root) {
    return []
  }

  let stack = [root]
  let output = []

  while (stack.length) {
    const node = stack.pop()
    output.push(node.val)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return output
}
