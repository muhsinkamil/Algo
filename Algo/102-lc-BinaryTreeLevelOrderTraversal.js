/*
    1. Start with empty queue.
    2. If no root, return []
    3. push root to q.
    4. Loop until q is empty. q will be filled in subsequent rouds.
    5. On going thru each level, make a new array containing all values of that level.
    6. Finally push the level to output
*/
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let output = []
  let q = [root]

  while (q.length) {
    let n = q.length
    let level = []

    for (let i = 0; i < n; i++) {
      const node = q.shift()
      level.push(node.val)

      if (node.left) {
        q.push(node.left)
      }

      if (node.right) {
        q.push(node.right)
      }
    }
    output.push(level)
  }

  return output
}
