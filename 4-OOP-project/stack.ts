{
    interface Stack {
        readonly size: number;
        pop(): string;
        push(value: string);
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {
        }

        get size() {
            return this._size;
        }

        pop(): string {
            if (this.head == null) {    // null == undefined, null !== undefined
                throw new Error('Stack is Empty');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;

            return node.value;
        }

        push(value: string) {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!');
            }
            const node: StackNode = {
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
    while(stack.size !== 0) {
        console.log(stack.pop());
    }

    stack.pop();    // Error
}