/**
 * Queue.
 *
 * @example
 *
 * var Queue = require('path-to-algorithms/src/data-structures/queue');
 *
 * var queue = new Queue();
 *
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.enqueue(3);
 *
 * console.log(queue.length();   // 3
 *
 * @module data-structures/queue
 */

/**
 * Queue.
 *
 * @public
 * @constructor
 */
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(value) {
		this.queue.push(value);
	}

	dequeue() {
		return this.queue.shift();
	}

	peek() {
		return this.queue[0];
	}

	length() {
		return this.queue.length;
	}
}
