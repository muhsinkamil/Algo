/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
    Approach:  Tortoise and hare.
    1. Do a basic check if head is empty
    2. Make a fast and slow pointer. Start a fast pointer to head.next as we know head is not empty at this point.
    3. fast moves 2 steps at a time and slow moves 1 at a time.
    4. if they meet at some point, there is a cycle.
    5. if fast or fast.next goes undefined, then there is no cycle.
 */
var hasCycle = function (head) {
  if (!head) {
    return false
  }

  let fast = head.next
  let slow = head

  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false
    }

    fast = fast.next.next
    slow = slow.next
  }

  return true
}

// head = [3,2,0,-4], pos = 1
// Output: true
