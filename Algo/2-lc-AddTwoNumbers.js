/*
  1. Create dummyNode to keep track of head and make a copy to form a list
  2. Loop over the given lists and get sum
  3. Cases: 
    a. if one of the list is none, then the list value is 0 and not been added to sum.
    b. To avoid a separate variable for sum, "bal" is used as sum on current iteration and carry for next iteration
    3. Make a node of last Digit value and carry the balance with "bal" variable
  3. Dont forget to move to next values of l1, l2 and l3 :)
  4. if the bal is still not zero after the iteration of lists, make a new Node with bal
  5. Return the dummyHead.next as its sole purpose is to remember the head :)
*/

var addTwoNumbers = function (l1, l2) {
  var dummyHead = new ListNode(0)
  var l3 = dummyHead
  var bal = 0

  while (l1 || l2) {
    if (l1) {
      bal = bal + l1.val
      l1 = l1.next
    }
    if (l2) {
      bal = bal + l2.val
      l2 = l2.next
    }

    const lastDigit = bal % 10
    bal = Math.floor(bal / 10)

    l3.next = new ListNode(lastDigit)
    l3 = l3.next
  }

  if (bal > 0) {
    l3.next = new ListNode(bal)
    l3 = l3.next
  }

  return dummyHead.next
}
