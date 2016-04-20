/**
 * Stack.
 *
 * @example
 *
 * var Stack = require('path-to-algorithms/src/data-structures/stack');
 *
 * var stack = new Stack();
 *
 * stack.push(1);
 * stack.push(2);
 * stack.push(3);
 *
 * console.log(stack.length();   // 3
 *
 * @module data-structures/stack
 */

/**
 * Stack.
 *
 * @public
 * @constructor
 */
class Stack {
	constructor() {
		this.stack = [];
	}

	push(value) {
		this.stack.push(value);
	}

	pop() {
		this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}
}
