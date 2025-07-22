const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
  if (!list || !list.head) return null;

  let pointer1 = list.head;
  let i = 0;

  // Move pointer1 ahead by 2 nodes
  while (i < 2 && pointer1.next) {
    pointer1 = pointer1.next;
    i++;
  }

  // If the list has fewer than 3 nodes
  if (i < 2) {
    return null;
  }

  let pointer2 = list.head;

  // Move both pointers until pointer1 reaches the end
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}


module.exports = thirdFromEnd;
