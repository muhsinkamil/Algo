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
var postorderTraversal = function (root) {
  let stack = []
  let output = []
  let current = root

  while (current || stack.length) {
    if (current) {
      stack.push(current)
      current = current.left // go left before adding any to output
    } else {
      let temp = stack[stack.length - 1].right

      if (temp) {
        current = temp // this means there is right child
      } else {
        temp = stack.pop() // there is no right child and no left child
        output.push(temp.val)

        while (stack.length && temp === stack[stack.length - 1].right) {
          // as long as the temp is the right child of root, pop and add to output
          temp = stack.pop()
          output.push(temp.val)
        }
      }
    }
  }

  return output
}
