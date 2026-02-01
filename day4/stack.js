class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

// Example 1: Basic push and pop
const stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log("Example 1 - Push 10, 20, 30:", stack1.items);
console.log("Pop:", stack1.pop());

// Example 2: Peek operation
const stack2 = new Stack();
stack2.push('A');
stack2.push('B');
console.log("Example 2 - Peek:", stack2.peek());

// Example 3: isEmpty check
const stack3 = new Stack();
console.log("Example 3 - Is empty:", stack3.isEmpty());

// Example 4: Stack size
const stack4 = new Stack();
stack4.push(1);
stack4.push(2);
stack4.push(3);
console.log("Example 4 - Stack size:", stack4.size());

// Example 5: Multiple operations
const stack5 = new Stack();
stack5.push('Hello');
stack5.push('World');
console.log("Example 5 - Print:", stack5.items);

// Example 6: Empty stack pop
const stack6 = new Stack();
console.log("Example 6 - Pop from empty:", stack6.pop());

// Example 7: String reversal using stack
const stack7 = new Stack();
const str = "HELLO";
for (let char of str) stack7.push(char);
let reversed = "";
while (!stack7.isEmpty()) reversed += stack7.pop();
console.log("Example 7 - Reversed string:", reversed);

// Example 8: Parentheses matching
function isBalanced(str) {
    const stack = new Stack();
    for (let char of str) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (stack.isEmpty()) return false;
            stack.pop();
        }
    }
    return stack.isEmpty();
}
console.log("Example 8 - Balanced: '(())':", isBalanced("(())"));
console.log("Example 8 - Balanced: '(()':", isBalanced("(()"));

// Example 9: Decimal to binary conversion
function decimalToBinary(num) {
    const stack = new Stack();
    while (num > 0) {
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }
    let binary = "";
    while (!stack.isEmpty()) binary += stack.pop();
    return binary;
}
console.log("Example 9 - Decimal 10 to binary:", decimalToBinary(10));

// Example 10: Expression evaluation (postfix)
function evaluatePostfix(expr) {
    const stack = new Stack();
    const tokens = expr.split(' ');
    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') stack.push(a + b);
            if (token === '-') stack.push(a - b);
            if (token === '*') stack.push(a * b);
            if (token === '/') stack.push(a / b);
        }
    }
    return stack.pop();
}
console.log("Example 10 - Postfix '5 3 +':", evaluatePostfix("5 3 +"));