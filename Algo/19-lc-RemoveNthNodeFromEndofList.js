/*
    Indicator -> Indicates the element to be removed to the modifier
    Modifier ->  Removes the element. Meaning, changing the next pointer

    1. Move the indicator by n positions.     
    2. If the indicator is not available, means the element to be removed is head. So return head.next

    3. Move the modifier as long as the indicator is available.
    4. Now the modifier will be in a place before the elem to be removed.
    5. Check if the modifier.

    How? Length of linked list = len, 
         position of element to be removed = (len - n) + 1
         
         So, move the modifier only to len - n positions and change the links
*/

var removeNthFromEnd = function (head, n) {
  var indicator = head
  var modifier = head

  while (n > 0) {
    indicator = indicator.next
    n--
  }

  if (!indicator) {
    return head.next
  }

  while (indicator.next) {
    modifier = modifier.next
    indicator = indicator.next
  }

  modifier.next = modifier.next.next

  return head
}
