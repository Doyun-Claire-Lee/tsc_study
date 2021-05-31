"use strict";
{
    class StackImpl {
        constructor(capacity) {
            this.capacity = capacity;
            this._size = 0;
        }
        get size() {
            return this._size;
        }
        pop() {
            if (this.head == null) { // null == undefined, null !== undefined
                throw new Error('Stack is Empty');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
        push(value) {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!');
            }
            const node = {
                value,
                next: this.head
            };
            this.head = node;
            this._size++;
        }
    }
    const stack = new StackImpl(4);
    stack.push('Ellie1');
    stack.push('Ellie4');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }
    const stack2 = new StackImpl(4);
    stack2.push(123);
    stack2.push(456);
    while (stack2.size !== 0) {
        console.log(stack2.pop());
    }
}
//# sourceMappingURL=stack.js.map