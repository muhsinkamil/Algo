/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    1. Have the prev pointing to null
    2. Have the curr pointing to head
    3. Change the link of curr.next to prev and move the curr.
    4. To move curr, use next at every iteration, so that after changing the link, we can safely move to next node.
    5. Finally return prev as it will be the new head.
*/
var reverseList = function (head) {
  if (!head || !head.next) return head

  let prev = null
  let curr = head

  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
