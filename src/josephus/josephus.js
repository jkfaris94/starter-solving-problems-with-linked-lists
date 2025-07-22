function josephus(list, m) {
    if (!list || !list.head || m < 1) return null;

  // Make the list circular
  let node = list.head;
  while (node.next) {
    node = node.next;
  }
  node.next = list.head; // tail.next = head

  // Start from the actual head
  node = list.head;

  // We need to track the node BEFORE the one we remove
  let prev = null;

  while (node !== node.next) {
    // count m - 1 steps to reach the node BEFORE the one to delete
    for (let i = 1; i < m; i++) {
      prev = node;
      node = node.next;
    }

    // remove node (node.next is the one to be removed)
    node.next = node.next.next;

    // if head was removed, update head
    if (node.next === list.head && m !== 1) {
      list.head = list.head.next;
    }

    node = node.next;
  }

  return node.value;
}

module.exports = josephus;
