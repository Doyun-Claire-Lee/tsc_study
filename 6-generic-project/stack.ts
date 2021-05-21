{
    interface Stack<T> {
        readonly size: number;
        pop(): T;
        push(value: T);
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;

        constructor(private capacity: number) {
        }

        get size() {
            return this._size;
        }

        pop(): T {
            if (this.head == null) {    // null == undefined, null !== undefined
                throw new Error('Stack is Empty');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;

            return node.value;
        }

        push(value: T) {
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

    const stack = new StackImpl<string>(4);
    stack.push('Ellie1');
    stack.push('Ellie4');
    while(stack.size !== 0) {
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>(4);
    stack2.push(123);
    stack2.push(456);
    while(stack2.size !== 0) {
        console.log(stack2.pop());
    }
}