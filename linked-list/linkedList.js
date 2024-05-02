class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert Last Node
  insertLast(data) {
    let node = new Node(data);

    let current;

    // if the size of linkedList is 0
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // Insert At Index
  insertAt(data, index) {
    // if index of list out of range
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      return this.insertFirst(data);
    }

    const node = new Node(data);
    let current;
    let previous;
    let count = 0;

    current = this.head;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get At Index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at Index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first 
    if (index === 0) {
      this.head = current.next;
    } else {

      while (count < index) {

        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print List data
  printListDate() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertLast(400);

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertLast(500);
ll.insertLast(600);

ll.insertAt(700, 3);
ll.insertAt(800, 4);

ll.removeAt(2);

ll.printListDate()

// ll.getAt(0);