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
    stack.push('Ellie2');
    stack.push('Ellie3');
    stack.push('Ellie4');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }
    stack.pop(); // Error
}
//# sourceMappingURL=stack.js.map