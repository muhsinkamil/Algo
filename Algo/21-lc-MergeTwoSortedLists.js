/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
    1. Make a new list with dummyHead to be returned 
    2. compare two pointers l1 and l2 values, and make a node out of smallest of l1 and l2 and move the pointer
    3. If l1 or l2 is none, make a l3.next to the non empty pointer
*/
var mergeTwoLists = function (l1, l2) {
  const dummyHead = new ListNode(0)
  let l3 = dummyHead

  while (l1 && l2) {
    if (l1.val < l2.val) {
      l3.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      l3.next = new ListNode(l2.val)
      l2 = l2.next
    }
    l3 = l3.next
  }

  if (l1) {
    l3.next = l1
  }

  if (l2) {
    l3.next = l2
  }

  return dummyHead.next
}
