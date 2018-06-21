'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserting at the beginning of the list is a 0(1) operation since you are inserting at only one place, the first position, regardless of the length of the list
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // Inserting at the end of the list requires iterating over all the nodes one by one until you reach the end. This makes the performance of inserting at the end to be O(n).
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // best-case performance is O(1), and the average and worst cases are O(n) due to the finding the node that you want to remove
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;

    }

    let currentNode = this.head;

    let previousNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('Item not found');
      return;

    }
    previousNode.next = currentNode.next;
  }

  find(item) {
    let currentNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {

      if (currentNode.next === null) {
        return null;
      } else {

        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  // Insert Before
  insertBefore(targetNode, newNode) {
    if (this.head === null) {
      this.insertFirst(newNode);
    } else if (!this.head.next) {
      this.insertLast(newNode);
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== targetNode)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not in list');
      return;
    }
    previousNode.next = new _Node(newNode, currentNode);
  }

  // Insert After
  insertAfter(target, newValue) {

    if (this.head === null) {
      this.insertFirst(newValue);
    } else if (!this.head.next) {
      this.insertLast(newValue);
    }

    let currentNode = this.head;
    let nextNode = this.head;

    while ((currentNode.value !== target) && (currentNode !== null)) {
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
    let newItem = new _Node(newValue, nextNode);
    currentNode.next = newItem;

  }

  // Insert At
  insertAt(newValue, position) {

    if (this.head === null) {
      this.insertFirst(newValue);
    } else if (!this.head.next) {
      this.insertLast(newValue);
    }

    let currentNode = this.head;
    let previousNode = this.head;
    let counter = 0;

    while (counter !== position) {

      if (!currentNode.next)
        this.insertLast(newValue);

      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    let newItem = new _Node(newValue);

    newItem.next = currentNode;
    previousNode.next = newItem;

  }

}

// Display All
function display(list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
console.log(display(main()));

// Find Size
function size(list) {

  let currentNode = list.head;
  let count = 0;
  if (list.head) {
    count = 1;
  } else {
    throw new Error('List is empty');
  }
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
}
console.log(size(main()));

function isEmpty(list) {
  if (list.head) {
    console.log(false);
  } else {
    console.log(true);
  }
}
console.log(isEmpty(main()));

// Find Previous
function findPrevious(list, item) {
  let currentNode = list.head;
  let prevNode = list.head;
  if (item === list.head.value) {
    throw new Error('No previous item');
  }

  while ((currentNode !== null) && (currentNode.value !== item)) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return prevNode.value;
}

console.log(findPrevious(main(), 'Athena'));

function findLast(list, item) {
  if (list.head === null) {
    throw new Error('List is empty');
  } else {
    let currentNode = list.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
console.log(findLast(main(), 'Athena'));

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.insertAt('Kat', 2);
  // SLL.remove('Tauhida');

  // console.log(JSON.stringify(SLL, null, 2));
  return SLL;
}

//

//
