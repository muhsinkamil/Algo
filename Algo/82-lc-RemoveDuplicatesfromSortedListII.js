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
    1. Have a dummy node initialised with some unique value other than head val, as first comparison would be with head
    2. dummy.next would be head.
    3. Have pre = dummy
    3. If iterator (here head) value and its next val is equal, move the iterator as long as its equal.
        4. connect the pre.next to iterator.next so pre would maintain all the unique links.
    5. if iterator value is not equal with next val, move pre and iterator as these are unique links.
    
    Note: at both conditions, iterator is moved, so moving iterator = iterator.next outside
*/

var deleteDuplicates = function (head) {
  if (!head) return head

  let dummy = new ListNode(head.val + 1, head)
  let pre = dummy

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next
      }
      pre.next = head.next
    } else {
      pre = pre.next
    }

    head = head.next
  }

  return dummy.next
}
