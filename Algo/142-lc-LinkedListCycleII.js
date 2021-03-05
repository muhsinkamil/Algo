/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    Approach: Tortoise and hare
    1. Do a basic check as head is none ?
    2. Make a fast pointer pointing to head.next and moves 2 at a time, as we know head is not null 
    3. Make slow to head and moves 1 at a time.
    4. Move until the fast and slow meets. 
    5. If fast goes null at some point, then there is no cycle.
    
    6. If they meet, 
        1. reset fast pointer to head and move one at a time.
        2. move slow pointer one step and go for loop.

    Let distance b/w head and starting point of loop = D
    let distance b/w starting point of loop and meeting point of two pointers = K
    let C = cycle length
    let i = no of cycles the tortoise covered before it meets hare
    let j = no of cycles the hare covered before it meets tortoise

    Tortoise distance = N = (D + K + C.i)
    Hare distance = 2N = (D + K + C.j)

    On subtracting, N = C(j - i)   ----> 1
    But we have N = (D + K + C.i)   ---> 2

    substituting, (D + K + C.i) = C(j - i)
    D + K + C(2i - j) = 0
    D + K = (j - 2i)C


    -------------------
    D = (j - 2i).C - K ------> solution
    --------------------
    
    This tells us, 
    when we start from head and travel D(ie. head to loop start) 
                === 
    (start from meet point -> go around cycle some times (j - 2i)) - K(loop start -> meet point)

 */

var detectCycle = function (head) {
  if (!head) return false

  let fast = head.next
  let slow = head

  while (fast !== slow) {
    if (!fast || !fast.next) {
      return
    }

    fast = fast.next.next
    slow = slow.next
  }

  fast = head

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
