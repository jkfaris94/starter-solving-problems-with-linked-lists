/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */

// function swap
//   // accepts list - a linked list
//              x - a node in the linked list
//              y - a node in the linked list

//   if the list is empty then
//     return  the list

//   declare a variable x_next and initialize it to the next pointer of x
//   declare a variable x_prev and initialize it to the previous node to x, null if x is the head
//   declare a variable y_prev and initialize it to the previous node to y, null if y is the head

//   set the next pointer of x to the next pointer of y
//   set the next pointer of y to x_next

//   if x is not the head  of the list then
//     set next pointer of x_prev to y
//   else
//     set head to y

//   if y is not the head  of the list then
//     set next pointer of y_prev to x
//   else
//     set head to x

//   return the list

function swap(list, x, y) {
    if (!list || !list.head || x === y) return list;

    let x_prev = null, y_prev = null, curr = list.head;

    // Find previous nodes for x and y
  while (curr && (x_prev === null || y_prev === null)) {
    if (curr.next === x) x_prev = curr;
    if (curr.next === y) y_prev = curr;
    curr = curr.next;
  }
    // Handle head cases
  if (list.head === x) x_prev = null;
  if (list.head === y) y_prev = null;

  // Swap next pointers
  const x_next = x.next;
  x.next = y.next;
  y.next = x_next;

    // Update previous nodes
  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

    if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

    return list;
}

module.exports = swap;
