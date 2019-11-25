class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(node) {
        if ( !this.head ) {
            this.head = node;
        }

        this.size++;
    }


}

class Node() {
    constructor() {
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }
}

let l = new LinkedList();
l.push(new Node());

